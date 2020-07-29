module.exports = function (sequelize, DataTypes) {
  const Invitation = sequelize.define('Invitation', {
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Invitation;
};
