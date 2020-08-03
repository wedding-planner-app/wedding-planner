const router = require('express').Router();
var db = require('../../models');

// getting *all* weddings from the API, route => ('api/weddings')
router.get('/', function (req, res) {
  db.Wedding.findAll({}).then(function (dbAllWedding) {
    res.json(dbAllWedding);
  });
});

// getting a wedding by id, route => ('api/weddings/:id')
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

// post a wedding, route => ( 'api/weddings')
router.post('/', function (req, res) {
  db.Wedding.create({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
    time: req.body.time,
    user_email: req.body.user_email,
  }).then(function (dbCreateWedding) {
    console.log(dbCreateWedding);
    res.json(dbCreateWedding);
  });
});

// update a wedding by wedding id, route => ('api/weddings/:id')
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
    res.json(dbUpdateWedding);
  });
});

// delete a wedding by id , route => ('api/weddings/:id')
router.delete('/:id', function (req, res) {
  db.Wedding.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbWeddingDelete) {
    res.json(dbWeddingDelete);
  });
});

module.exports = router;
