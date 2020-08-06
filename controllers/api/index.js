const router = require('express').Router();
const weddingRoutes = require('./wedding');
const guestsRoutes = require('./guests.js');
const invitationRoutes = require('./invitation.js');
const venueRoutes = require('./venue.js');
const venueImages = require('./venue-images');
const mediaRoutes = require('./media.js');

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;

if (!issuer || !audience) {
  throw new Error(
    'Please make sure that .env is in place and populated',
  );
}

// setup jwt with auth0
const jwtCheck = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 100,
    jwksUri: `${issuer}.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: issuer,
  algorithms: ['RS256'],
});

// api routes, add jwtCheck to require authentication
router.use('/weddings', jwtCheck, weddingRoutes);
router.use('/guests', jwtCheck, guestsRoutes);
router.use('/invitation', jwtCheck, invitationRoutes);
router.use('/media', jwtCheck, mediaRoutes);
router.use('/venue', jwtCheck, venueRoutes);
// unauthenticated apis
router.use('/images', venueImages);

module.exports = router;
