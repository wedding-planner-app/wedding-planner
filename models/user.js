module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.TEXT,
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
      type: DataTypes.STRING(64),
      // added validation to password (must match this RegExp)
      validate: {
        is: /^[0-9a-f]{64}$/i,
      },
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return User;
};
