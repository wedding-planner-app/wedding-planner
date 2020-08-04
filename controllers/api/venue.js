const router = require('express').Router();
var db = require('../../models');
const jwt_decode = require('jwt-decode');
var request = require('request');

const getEmail = (token) => {
  decoded = jwt_decode(token);
  return decoded[
    'https://wedding-planner-platform.herokuapp.com/email'
  ];
};

// get venue information from Google Place API
router.get('/search', function (req, res) {
  const searchQuery = req.query.name;
  console.log(`Search Query: ${searchQuery}`);
  // // variable to store all Google Places API data results
  var resultsData = [];
  // // 1st query to pull initial text search data
  var options1 = {
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/place/textsearch/json?key=${process.env.API_KEY}&query=${searchQuery}`,
    headers: {},
  };
  request(options1, async function (error, response) {
    if (error) throw new Error(error);
    // parsing out the response from Google Text search endpoint
    var responseBodyTextSearch = JSON.parse(response.body);
    // for loop to interate through the Google Text search response body
    for (var i = 0; i < responseBodyTextSearch.results.length; i++) {
      // variable to store Text Search response data from Places API
      var placeData = {
        name: responseBodyTextSearch.results[i].name,
        address: responseBodyTextSearch.results[i].formatted_address,
      };
      // if statement for results with no photo
      var photo = responseBodyTextSearch.results[i].photos;
      if (photo) {
        placeData.photo = `/images/venue/${photo[0].photo_reference}`;
      } else {
        placeData.photo = 'Sorry, no photo available';
      }

      // variable to store place_id for queried venues Google Place Details endpoint
      var placeID = responseBodyTextSearch.results[i].place_id;

      // 2nd query to pull URL based on the place ID pulled from above text search
      var options2 = {
        method: 'GET',
        url: `https://maps.googleapis.com/maps/api/place/details/json?key=${process.env.API_KEY}&place_id=${placeID}&fields=url`,
        headers: {},
      };
      // awaiting for place_id data to return
      var promiseWrapper = function () {
        return new Promise((resolve) => {
          request(options2, function (error, response) {
            if (error) throw new Error(error);
            var responseBodyDetailUrl = JSON.parse(response.body);
            placeData.url = responseBodyDetailUrl.result.url;
            resultsData.push(placeData);
            resolve('resolved');
          });
        }).catch((error) => {
          console.log('caught', error.message);
        });
      };
      await promiseWrapper();
    }
    res.json(resultsData);
  });
});

// get all venue information , route => ('api/venue')
router.get('/', function (req, res) {
  let email = getEmail(req.headers.authorization);

  db.Venue.findAll({
    where: {
      WeddingId: req.query.eventid,
    },
    include: [
      {
        model: db.WeddingId,
        where: { user_email: email },
      },
    ],
  }).then(function (dbVenuesAll) {
    res.json(dbVenuesAll);
  });
});

// post a venue , route => ('api/venue')
router.post('/', function (req, res) {
  db.Venue.create({
    name: req.body.name,
    photo: req.body.photo,
    address: req.body.formatted_address,
    url: req.body.url,
    // street: req.body.street,
    // city: req.body.city,
    // state: req.body.state,
    // zipCode: req.body.zipCode,
    WeddingId: req.query.eventid,
  }).then(function (dbCreateVenue) {
    res.json(dbCreateVenue);
  });
});

// update venue by id , route => ('api/venue/:id')
router.put('/:id', function (req, res) {
  db.Venue.update(
    {
      name: req.body.name,
      photo: req.body.photo,
      address: req.body.formatted_address,
      url: req.body.url,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  ).then(function (dbUpdateVenue) {
    res.json(dbUpdateVenue);
  });
});

// delete venue by id , route => ('api/venue/:id')
router.delete('/:id', function (req, res) {
  db.Venue.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbVenueDelete) {
    res.json(dbVenueDelete);
  });
});

module.exports = router;
