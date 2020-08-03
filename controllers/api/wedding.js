const router = require('express').Router();
var db = require('../../models');
const jwt_decode = require('jwt-decode');

const getEmail = (token) => {
  decoded = jwt_decode(token);
  return decoded[
    'https://wedding-planner-platform.herokuapp.com/email'
  ];
};

// getting *all* weddings from the API, route => ('api/weddings')
router.get('/', function (req, res) {
  let email = getEmail(req.headers.authorization);
  db.Wedding.findAll({
    where: {
      user_email: email,
    },
  }).then(function (dbAllWedding) {
    res.json(dbAllWedding);
  });
});

// getting a wedding by id, route => ('api/weddings/:id')
router.get('/:id', function (req, res) {
  let email = getEmail(req.headers.authorization);
  db.Wedding.findOne({
    where: {
      id: req.params.id,
      user_email: email,
    },
  }).then(function (dbAllWeddingById) {
    console.log(dbAllWeddingById);
    res.json(dbAllWeddingById);
  });
});

// post a wedding, route => ( 'api/weddings')
router.post('/', function (req, res) {
  let email = getEmail(req.headers.authorization);
  db.Wedding.create({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    user_email: email,
  }).then(function (dbCreateWedding) {
    console.log(dbCreateWedding);
    res.json(dbCreateWedding);
  });
});

// update a wedding by wedding id, route => ('api/weddings/:id')
router.put('/:id', function (req, res) {
  let email = getEmail(req.headers.authorization);
  db.Wedding.update(
    {
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      time: req.body.time,
    },
    {
      where: {
        id: req.params.id,
        user_email: email,
      },
    },
  ).then(function (dbUpdateWedding) {
    res.json(dbUpdateWedding);
  });
});

// delete a wedding by id , route => ('api/weddings/:id')
router.delete('/:id', function (req, res) {
  let email = getEmail(req.headers.authorization);
  db.Wedding.destroy({
    where: {
      id: req.params.id,
      user_email: email,
    },
  }).then(function (dbWeddingDelete) {
    res.json(dbWeddingDelete);
  });
});

module.exports = router;
