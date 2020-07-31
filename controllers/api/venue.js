const router = require('express').Router();
var db = require('../../models');

// get all venue information , route => ('api/venue')
router.get('/', function (req, res) {
  db.Venue.findAll({}).then(function (dbVenuesAll) {
    res.json(dbVenuesAll);
  });
});

// get all venue information by city, route => ('api/venue/city/:city')
router.get('/city/:city', function (req, res) {
  db.Venue.findAll({
    where: {
      city: req.params.city,
    },
  }).then(function (dbVenuesAllbyCity) {
    res.json(dbVenuesAllbyCity);
  });
});

// get all venue information by state, route => ('api/venue/state/:state')
router.get('/state/:state', function (req, res) {
  db.Venue.findAll({
    where: {
      city: req.params.city,
    },
  }).then(function (dbVenuesAllbyState) {
    res.json(dbVenuesAllbyState);
  });
});

// get all venue information by zipcode, route => ('api/venue/zipCode/:zipCode')
router.get('/zipCode/:zipCode', function (req, res) {
  db.Venue.findAll({
    where: {
      zipCode: req.params.zipCode,
    },
  }).then(function (dbVenuesAllbyZipCode) {
    res.json(dbVenuesAllbyZipCode);
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
