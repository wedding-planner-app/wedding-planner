const router = require('express').Router();
const userRoutes = require('./user');
const weddingRoutes = require('./wedding');
const guestsRoutes = require('./guests.js');

// api routes
router.use('/user', userRoutes);
router.use('/weddings', weddingRoutes);
router.use('/guests', guestsRoutes);

module.exports = router;
