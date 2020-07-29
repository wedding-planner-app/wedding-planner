const router = require('express').Router();
var db = require('../../models/wedding');
var Sequelize = require('sequelize');

// get wedding ''
router.get('/', function (req, res) {
  console.log('Welcome to Wedding API. You are connected to the DB');
});

module.exports = router;
