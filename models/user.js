module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must to enter an username',
        },
      },
      unique: true,
      validate: {
        // checks for email format (yst@gmail.com)
        isEmail: {
          msg:
            'Please enter a valid email format: example@gmail.com ',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  User.associate = function (models) {
    // Associating User with Wedding
    // When an User is deleted, also delete any associated Wedding
    User.hasMany(models.Wedding, {
      onDelete: 'cascade',
    });

    models.Wedding.belongsTo(User);
  };

  return User;
};
