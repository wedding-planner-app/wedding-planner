// Create venue model
module.exports = function (sequelize, DataTypes) {
  var Venue = sequelize.define('Venue', {
    // Creating columns to store the required data in the venue table
    // Code to create name column in Venue table
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must entere a venue name',
        },
      },
    },
    // Code to create street column in Venue table
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter a street for the venue',
        },
      },
    },
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
  });
  // Venues model
  return Venue;
};
