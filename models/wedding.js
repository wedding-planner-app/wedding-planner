module.exports = function (sequelize, DataTypes) {
  // creating table wedding
  var Wedding = sequelize.define('Wedding', {
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter an email',
        },
      },
      validate: {
        isEmail: {
          msg:
            'Please enter a valid email format: example@gmail.com ',
        },
      },
    },
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
    Wedding.hasMany(models.Media, {
      onDelete: 'cascade',
    });

    // Associating Guest with Wedding
    Wedding.hasMany(models.Guest, {
      onDelete: 'cascade',
    });

    Wedding.hasOne(models.Venue, {
      onDelete: 'cascade',
    });

    models.Media.belongsTo(Wedding);
    models.Guest.belongsTo(Wedding);
    models.Venue.belongsTo(Wedding);
  };

  return Wedding;
};
