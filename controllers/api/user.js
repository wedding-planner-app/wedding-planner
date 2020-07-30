const router = require('express').Router();
var db = require('../../models');

// get all users
router.get('/', function (req, res) {
  db.User.findAll({}).then(function (dbAllUsers) {
    res.json(dbAllUsers);
  });
});

// get user by id
router.get('/:id', function (req, res) {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then(function (dbAllUserById) {
    res.json(dbAllUserById);
  });
});

// get user by email
router.get('/email/:email', function (req, res) {
  db.User.findOne({
    where: {
      email: req.params.email,
    },
  }).then(function (dbAllUserByEmail) {
    res.json(dbAllUserByEmail);
  });
});

// post route
router.post('/user/create', function (req, res) {
  //TODOs
});

// put route
router.put('/user/update', function (req, res) {
  //TODOs
});

module.exports = router;
