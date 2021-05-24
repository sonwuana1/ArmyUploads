'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define (
    "Photo",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      photoLink: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {}
  );
  Photo.associate = function (models) {
    // associations can be defined here
    Photo.belongsTo(models.User, { foreignKey: 'userId' })
    Photo.belongsTo(models.Album, { foreignKey: 'albumId' })
  };
  return Photo;
};
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
//     static associate(models) {
//       Photo.belongsTo(models.User, { foreignKey: 'userId', as: 'users' })
//       Photo.belongsTo(models.Album, { foreignKey: 'albumId', as: 'albums' })
//     }
//   };
//   Photo.init({
//     name: DataTypes.STRING,
//     photoLink: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Photo',
//   });
//   return Photo;
// };
