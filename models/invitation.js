module.exports = function (sequelize, Datatypes) {
  const Invitation = sequelize.define('Invitation', {
    status: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  });

  return Invitation;
};
