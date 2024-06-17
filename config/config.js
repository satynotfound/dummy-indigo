require('dotenv').config();


module.exports = {
  development: {
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres'
  },
  test: {
    username: 'root',
    password: null,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: 'root',
    password: null,
    database: process.env.DATABASE_NAME,
    host: '127.0.0.1',
    dialect: 'postgres'
  }
}

