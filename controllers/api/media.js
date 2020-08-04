const router = require('express').Router();
var db = require('../../models');
const jwt_decode = require('jwt-decode');

const getEmail = (token) => {
  decoded = jwt_decode(token);
  return decoded[
    'https://wedding-planner-platform.herokuapp.com/email'
  ];
};

// get all media information , route => ('api/media')
router.get('/', function (req, res) {
  let email = getEmail(req.headers.authorization);
  db.Media.findAll({
    where: {
      WeddingId: req.query.eventid,
    },
    include: [
      {
        model: db.WeddingId,
        where: { user_email: email },
      },
    ],
  }).then(function (dbMedia) {
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
        WeddingId: req.query.eventid,
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
      WeddingId: req.query.eventid,
    },
  }).then(function (dbMediaDelete) {
    res.json(dbMediaDelete);
  });
});

module.exports = router;
