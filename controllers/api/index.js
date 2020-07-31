const router = require('express').Router();
const userRoutes = require('./user');
const weddingRoutes = require('./wedding');
const invitationRoutes = require('./invitation.js');
const venueRoutes = require('./venue.js');

// api routes
router.use('/user', userRoutes);
router.use('/weddings', weddingRoutes);
router.use('/invitation', invitationRoutes);
router.use('/venue', venueRoutes);

module.exports = router;
