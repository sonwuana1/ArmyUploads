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
      },
      {
        name: 'pouting',
        photoLink: 'https://i.pinimg.com/564x/e4/54/ff/e454ff9fd3bbe53765b39dcf62c39033.jpg',
        userId: 1,
        albumId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
          name: 'more sleep',
          photoLink: 'https://i.pinimg.com/564x/7b/af/b7/7bafb7b770cb2a816da64015efb3c98c.jpg',
          userId: 1,
          albumId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
            name: 'colorful',
            photoLink: 'https://i.pinimg.com/564x/1e/0c/a1/1e0ca1c405e262d0cfb5a12bc974fd3e.jpg',
            userId: 1,
            albumId: 2,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
              name: 'dynamite-taehyung',
              photoLink: 'https://i.pinimg.com/564x/02/a7/e0/02a7e081a943ebeb55575040d8dbd0f1.jpg',
              userId: 1,
              albumId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              name: 'dynamite-jk',
              photoLink: 'https://i.pinimg.com/564x/03/b8/22/03b8229ebcfa7bb44c3de431fd287c22.jpg',
              userId: 1,
              albumId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              name: 'kookie-smiling',
              photoLink: 'https://i.pinimg.com/564x/82/93/f2/8293f289563f841ffbc97d19e7bffb86.jpg',
              userId: 1,
              albumId: 3,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              name: 'kookie-denim',
              photoLink: 'https://i.pinimg.com/564x/1a/9f/d5/1a9fd5a757771d9454ad3b15df290b3d.jpg',
              userId: 1,
              albumId: 3,
              createdAt: new Date(),
              updatedAt: new Date()
            },
            {
              name: 'yoongi',
              photoLink: 'https://i.pinimg.com/564x/a7/69/91/a76991a57186751045872695c2db3635.jpg',
              userId: 1,
              albumId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
            },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Photos', null, {});
  }
};
