const router = require('express').Router();
const userRoutes = require('./user');
const weddingRoutes = require('./wedding');

// api routes
router.use('/user', userRoutes);
router.use('/wedding', weddingRoutes);

module.exports = router;
