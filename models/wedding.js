module.exports = function (sequelize, Datatypes) {
  // creating table wedding
  var Wedding = sequelize.define('Wedding', {
    // added validation allowNull => false
    title: {
      // title type STRING (Default length 255)
      type: Datatypes.STRING,
      allowNull: false,
    },
    description: {
      // added TEXT datatypes because is a long text (An unlimited length text column)
      type: Datatypes.TEXT,
      allowNull: false,
    },
    date: {
      type: Datatypes.DATE,
      allowNull: false,
    },
    time: {},
  });

  return Wedding;
};
