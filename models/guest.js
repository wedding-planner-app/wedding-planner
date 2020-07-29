module.exports = function (sequelize, DataTypes) {
  var Guest = sequelize.define('Guest', {
    // Adds NAME data type
    name:{},
   // Adds EMAIL data type
    email:{},
    // Adds phone data type
    phone:{},

  });

  // When an Wedding is deleted, also delete any associated Venue
  Guest.hasOne(models.Wedding, {
    onDelete: 'cascade',
  });

  return Guest;
};
