'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('list', {
      _id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      sr_no: {
        type: Sequelize.INTEGER
      },
      visitId: {
        type: Sequelize.INTEGER
      },
      depot: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      cluster: {
        type: Sequelize.STRING
      },
      staffName: {
        type: Sequelize.STRING
      },
      reqDate: {
        type: Sequelize.DATE
      },
      siteContact: {
        type: Sequelize.STRING
      },
      contactNumber: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM('Requested','Visited','Follow up Needed','Revisited','Converted','Completed & Archived','Lost & Archive')
      },
      samplingDone: {
        type: Sequelize.STRING
      },
      siteType: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('list');
  }
};