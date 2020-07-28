module.exports = function (sequelize, Datatypes) {
  // creating table wedding
  var Wedding = sequelize.define('Wedding', {
    // added validation allowNull => false
    title: {
      // title type STRING (Default length 255)
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter a wedding title',
        },
      },
    },
    description: {
      // added TEXT datatypes because is a long text (An unlimited length text column)
      type: Datatypes.TEXT,
      allowNull: false,
    },
    date: {
      // added DATE datatype
      type: Datatypes.DATE,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter an Date',
        },
        isDate: true,
      },
    },
    time: {
      // added TIME datatype
      type: Datatypes.TIME,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter the time",
        },
      },
    },
  });

  Wedding.associate = function (models) {
    // Associating Wedding with Venue
    // When an Wedding is deleted, also delete any associated Venue
    Wedding.hasOne(models.Venue, {
      onDelete: 'cascade',
    });

    models.Venue.belongsTo(Wedding);
  };

  return Wedding;
};
