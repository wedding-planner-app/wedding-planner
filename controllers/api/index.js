const router = require('express').Router();
const userRoutes = require('./user');
const weddingRoutes = require('./wedding');

// api routes
router.use('/user', userRoutes);
router.use('/weddings', weddingRoutes);

module.exports = router;
