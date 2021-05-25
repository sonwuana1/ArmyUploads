'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Photos', [
      {
      name: 'DO NOT DISTURB!',
      photoLink: 'https://i.pinimg.com/564x/39/cd/4d/39cd4dc32e102b359a22ac08256ca2bd.jpg',
      userId: 1,
      albumId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'dynamite-1',
        photoLink: 'https://i.pinimg.com/564x/29/e0/1c/29e01c6520539364e4a26cbc82af1287.jpg',
        userId: 1,
        albumId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Photos', null, {});
  }
};
