const { Sequelize } = require('sequelize');

// Database configuration
const sequelize = new Sequelize('database_name', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql', // or 'postgres', 'sqlite', 'mssql'
});

// Test the connection
sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
  console.error('Unable to connect to the database:', error);
});

module.exports = sequelize;