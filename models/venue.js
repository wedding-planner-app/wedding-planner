// Create venue model
module.exports = function (sequelize, DataTypes) {
  var Venue = sequelize.define('Venue', {
    // Creating columns to store the required data in the venue table
    // Added NAME data type
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter a venue name',
        },
      },
    },
    // Added Venue Photo
    photo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter photo URL',
        },
      },
    },

    // Added Address data type
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter full address',
        },
      },
    },
    // Added Venue website
    website: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Must enter link to venue's website",
        },
      },
    },
  });

  // Venues model
  return Venue;
};
