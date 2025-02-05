require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": parseInt(process.env.DB_PORT, 10),
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.TEST_USER,
    "password": process.env.TEST_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": parseInt(process.env.TEST_USER_PORT, 10),
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.PRODUCT_USER,
    "password": process.env.PRODUCT_PASSWORD,
    "database": process.env.PRODUCT_NAME,
    "port": parseInt(process.env.PRODUCT_PORT, 10),
    "host": process.env.PRODUCT_HOST,
    "dialect": "postgres"
  }
}
