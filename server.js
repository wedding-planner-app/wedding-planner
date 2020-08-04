require('dotenv').config();

const express = require('express');
const routes = require('./controllers');
const app = express();
const morgan = require('morgan');

var db = require('./models');

require('dotenv').config();
// console.log(process.env);

const PORT = process.env.PORT || 3001;
const appOrigin = process.env.APP_ORIGIN;

app.use(morgan('dev'));

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
