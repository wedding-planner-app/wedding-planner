module.exports = function (sequelize, DataTypes) {
  var Guest = sequelize.define('Guest', {
    // Adds NAME data type
    name: {
      // Name type STRING
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter guest name',
        },
      },
    },
    // Adds EMAIL data type
    email: {
      // Email type STRING
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter quest email',
        },
      },
    },
    // Adds phone data type
    phone: {
      // Phone type STRING
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter quest phone number',
        },
      },
    },
  });

  // When an Wedding is deleted, also delete any associated Venue
  Guest.hasOne(models.Wedding, {
    onDelete: 'cascade',
  });

  return Guest;
};
