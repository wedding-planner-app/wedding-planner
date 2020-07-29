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

  Guest.associate = function (models) {
    // Associating Guest with Wedding
    // When an Guest is deleted,they are also deleted from the wedding table
    Guest.hasOne(models.Wedding, {
      onDelete: 'cascade',
    });

    models.Guest.belongsTo(Wedding);
  };

  Guest.associate = function (models) {
    // Associating Guest with Invitation
    // When an Guest is deleted,they are also deleted from the invitation table
    Guest.hasOne(models.Invitation, {
      onDelete: 'cascade',
    });

    models.Guest.belongsTo(Invitation);
  };

  return Guest;
};
