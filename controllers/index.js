const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// API Routes will start '/api'
router.use('/api', apiRoutes);

// If no API routes are hit, send the React app will display the homepage
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
