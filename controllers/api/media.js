const router = require('express').Router();
var db = require('../../models');

// get all media information , route => ('api/media')
router.get('/', function (req, res) {
  db.Media.findAll({}).then(function (dbMedia) {
    res.json(dbMedia);
  });
});

// post media content , route => ('api/media')
router.post('/', function (req, res) {
  db.Media.create({
    mediaType: req.body.mediaType,
    url: req.body.url,
  }).then(function (dbCreateMedia) {
    res.json(dbCreateMedia);
  });
});

// update media by id , route => ('api/media/:id')
router.put('/:id', function (req, res) {
  db.Media.update(
    {
      mediaType: req.body.mediaType,
      url: req.body.url,
    },
    {
      where: {
        id: req.params.id,
      },
    },
  ).then(function (dbUpdateMedia) {
    res.json(dbUpdateMedia);
  });
});

// delete media entry by id , route => ('api/media/:id')
router.delete('/:id', function (req, res) {
  db.Media.destroy({
    where: {
      id: req.params.id,
    },
  }).then(function (dbMediaDelete) {
    res.json(dbMediaDelete);
  });
});

module.exports = router;
