// User model placeholder

module.exports = function (sequelize, DataTypes) {
  var Venue = sequelize.define('Venue', {
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
  });
  // Venues model
  return Venue;
};
