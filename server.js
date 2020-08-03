const express = require('express');
const routes = require('./controllers');
const app = express();
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

var db = require('./models');

const PORT = process.env.PORT || 3001;
const appOrigin = process.env.APP_ORIGIN;
const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;

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

// requires authentication
// app.use(jwtCheck);

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);

// Start the API server
// ADD SEQUELIZE HERE TO CONNECT TO YOUR DB
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
