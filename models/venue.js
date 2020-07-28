// Create venue model
module.exports = function (sequelize, DataTypes) {
  var Venue = sequelize.define('Venue', {
    // Creating columns to store the required data in the venue table
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
  });
  // Venues model
  return Venue;
};
