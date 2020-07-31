const router = require('express').Router();
const userRoutes = require('./user');
const weddingRoutes = require('./wedding');
const guestsRoutes = require('./guests.js');
const invitationRoutes = require('./invitation.js');
const venueRoutes = require('./venue.js');
const mediaRoutes = require('./media.js');


// api routes
router.use('/user', userRoutes);
router.use('/weddings', weddingRoutes);
router.use('/guests', guestsRoutes);
router.use('/invitation', invitationRoutes);
router.use('/venue', venueRoutes);
router.use('/media', mediaRoutes);

module.exports = router;
