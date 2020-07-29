module.exports = function (sequelize, DataTypes) {
  var Media = sequelize.define('Media', {
    mediaType: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter the media type',
        },
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isUrl: {
          msg: 'must to enter a valid Url',
        },
        notNull: {
          msg: 'Must enter a media type',
        },
      },
    },
  });

  return Media;
};
