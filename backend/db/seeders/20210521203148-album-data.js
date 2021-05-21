'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Albums', [
      {
      name: 'BTS sleeping 😴',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

  await queryInterface.bulkDelete('Albums', null, {});

  }
};