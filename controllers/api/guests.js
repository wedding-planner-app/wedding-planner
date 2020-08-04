const router = require('express').Router();
var db = require('../../models');
const jwt_decode = require('jwt-decode');

const getEmail = (token) => {
  console.log(token);
  decoded = jwt_decode(token);
  return decoded[
    'https://wedding-planner-platform.herokuapp.com/email'
  ];
};

// get all guests **
router.get('/', function (req, res) {
  let email = getEmail(req.headers.authorization);

  db.Guest.findAll({
    where: {
      WeddingId: req.query.eventid,
    },
    include: [
      {
        model: db.Wedding,
        where: { user_email: email }, // enforces wedding belongs to user email
      },
    ],
  }).then(function (dbGuests) {
    res.json(dbGuests);
  });
});

// get guest by id **
router.get('/:id', function (req, res) {
  let email = getEmail(req.headers.authorization);
  db.Guest.findOne({
    where: {
      id: req.params.id,
      WeddingId: req.query.eventid,
    },
    include: [
      {
        model: db.Wedding,
        where: { user_email: email }, // enforces wedding belongs to user email
      },
    ],
  }).then(function (dbGuestById) {
    res.json(dbGuestById);
  });
});

// post a guest **
router.post('/', function (req, res) {
  //TODOs Validate
  db.Guest.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    WeddingId: req.query.eventid,
  }).then(function (dbCreateGuest) {
    res.json(dbCreateGuest);
  });
});

// update guest by id
router.put('/:id', function (req, res) {
  db.Guest.update(
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  ).then(function (dbUpdateGuestById) {
    res.json(dbUpdateGuestById);
  });
});

// delete user by id **
router.delete('/:id', function (req, res) {
  db.Guest.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbGuestDelete) {
    res.json(dbGuestDelete);
  });
});

module.exports = router;
