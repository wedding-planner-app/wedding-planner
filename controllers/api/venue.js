const router = require('express').Router();
var db = require('../../models');
const jwt_decode = require('jwt-decode');

const getEmail = (token) => {
  decoded = jwt_decode(token);
  return decoded[
    'https://wedding-planner-platform.herokuapp.com/email'
  ];
};

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
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
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
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zipCode: req.body.zipCode,
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
