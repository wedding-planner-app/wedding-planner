const router = require('express').Router();
const userRoutes = require('./user');

// Book routes
router.use('/user', userRoutes);

module.exports = router;
