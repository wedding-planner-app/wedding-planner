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
          msg: 'Must entere a venue name',
        },
      },
    },
    // Added STREET data type
    street: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter physical street address',
        },
      },
    },
    // Added CITY data type
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter city name',
        },
      },
    },
    // Added STATE data type
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter state name',
        },
      },
    },
    // Added ZIPCODE data type
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter zipcode',
        },
      },
    }
  }),

    Venue.associate = function (models) {
      // Associating Venue with Weddings
      // When an Wedding is deleted, also delete any entry for associated Venue
      Venue.hasMany(models.Wedding, {
        onDelete: 'cascade',
      });
  
      models.Wedding.belongsTo(Wedding);
    };

  // Venues model
  return Venue;
};
