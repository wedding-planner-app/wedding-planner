module.exports = function (sequelize, DataTypes) {
  // creating table wedding
  var Wedding = sequelize.define('Wedding', {
    // added validation allowNull => false
    title: {
      // title type STRING (Default length 255)
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter a wedding title',
        },
      },
    },
    description: {
      // added TEXT datatypes because is a long text (An unlimited length text column)
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      // added DATE datatype
      type: DataTypes.DATE,
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
      type: DataTypes.TIME,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter the time',
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

  Wedding.associate = function (models) {
    // Associating Wedding with Media
    // When an Wedding is deleted, also delete any associated Media
    Wedding.hasMany(models.Media, {
      onDelete: 'cascade',
    });

    models.Media.belongsTo(Wedding);
  };

 Wedding.associate = function (models) {
    // Associating Guest with Wedding
    // When an wedding is deleted, all the guests will be deleted
    Wedding.hasMany(models.Guest, {
      onDelete: 'cascade',
    });

    models.Guest.belongsTo(Wedding);
  };

  return Wedding;
};
