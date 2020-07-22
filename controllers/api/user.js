const router = require('express').Router();
var db = require('../../models');

// get route -> index
router.get('/', function (req, res) {
  //do things here for other routes
});

// get route, edited to match sequelize
router.get('/user', function (req, res) {
  //TODOs
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
