'use strict';
const {
  Model,
  Sequelize
} = require('sequelize');
const {  sequelize } = require('../../config/connection');

module.exports = sequelize.define('list',
  {
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
      type:Sequelize.DATE,
    }
  },
  {
    freezeTableName: true,
    paranoid:true,
    modelName:'list'
  }
);