module.exports = function (sequelize, Datatypes) {
  const Media = sequelize.define('Media', {
    mediaType: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Must enter the media type',
        },
      },
    },
    url: {
      type: Datatypes.STRING,
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
