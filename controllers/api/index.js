const router = require('express').Router();
const userRoutes = require('./user');
const weddingRoutes = require('./wedding');
const invitationRoutes = require('./invitation.js');

// api routes
router.use('/user', userRoutes);
router.use('/weddings', weddingRoutes);
router.use('/invitation', invitationRoutes);

module.exports = router;
