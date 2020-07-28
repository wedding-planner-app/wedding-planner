// User model placeholde

module.exports = function (sequelize, DataTypes) {
  var Venues = sequelize.define('Venues', {
    name: DataTypes.STRING,
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipcode: DataTypes.STRING,
  });
  // Venues model
  return Venues;
};
