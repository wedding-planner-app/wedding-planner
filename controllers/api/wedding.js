const router = require('express').Router();
var db = require('../../models');

// getting *all* weddings from the API
router.get('/', function (req, res) {
  db.Wedding.findAll({}).then(function (dbAllWedding) {
    res.json(dbAllWedding);
  });
});

module.exports = router;
