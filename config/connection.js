const { Sequelize } = require('sequelize');
require('dotenv').config();


// const env = process.env.NODE_ENV || 'development';
// const config = require('./config');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 300000,
        acquire: 300000
      }
  });

const connect = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {sequelize, connect};