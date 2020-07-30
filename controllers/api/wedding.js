const router = require('express').Router();
var db = require('../../models');

// getting *all* weddings from the API
router.get('/', function (req, res) {
  db.Wedding.findAll({}).then(function (dbAllWedding) {
    res.json(dbAllWedding);
  });
});

router.get('/:id', function (req, res) {
  db.Wedding.findOne({
    where: {
      id: req.params.id,
    },
  }).then(function (dbAllWeddingById) {
    console.log(dbAllWeddingById);
    res.json(dbAllWeddingById);
  });
});

router.get('/user/:userid', function (req, res) {
  db.Wedding.findAll({
    where: {
      UserId: req.params.userid,
    },
  }).then(function (dbAllWeddingById) {
    console.log(dbAllWeddingById);
    res.json(dbAllWeddingById);
  });
});

router.post('/', function (req, res) {
  db.Wedding.create({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    UserId: req.body.userid,
  }).then(function (dbCreateWedding) {
    console.log(dbCreateWedding);
    res.json(dbCreateWedding);
  });
});

router.put('/:id', function (req, res) {
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
      },
    },
  ).then(function (dbUpdateWedding) {
    console.log(dbUpdateWedding);
    res.json(dbUpdateWedding);
  });
});

module.exports = router;
