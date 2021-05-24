'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define (
    "Album",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    },
    {}
  );
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   Album.belongsTo(models.User, { foreignKey: 'userId', as: 'users' })
    // }
    Album.associate = function (models) {
      // associations can be defined here
      Album.belongsTo(models.User, { foreignKey: 'userId'})
      Album.hasMany(models.Photo, { foreignKey: 'albumId' })
    };
    return Album;
  };
//   Album.init({
//     name: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Album',
//   });
//   return Album;
// };
