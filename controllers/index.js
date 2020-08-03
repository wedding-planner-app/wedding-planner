const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
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
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuer}.well-known/jwks.json`,
  }),
  audience: audience,
  issuer: issuer,
  algorithms: ['RS256'],
});

// API Routes will start '/api'
router.use('/api', apiRoutes);
// router.use('/api', jwtCheck, apiRoutes);

// If no API routes are hit, send the React app will display the homepage
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
