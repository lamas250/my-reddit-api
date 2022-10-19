'use strict';
const faker = require('faker');

const posts = [...Array(100)].map(post => ({
  title: faker.company.catchPhrase(),
  link: faker.internet.url(),
  imageUrl: "https://picsum.photos/600/600",
  createdAt: new Date(),
  updatedAt: new Date(),
}));

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Posts',posts)
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
