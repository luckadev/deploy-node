const Sequelize = require('sequelize');

// Connecting to database with sequelize
const connection = new Sequelize('guiaperguntas', 'root', 'lu34255313', {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'mysql',
});

module.exports = connection;

// connection -> new Sequelize('nomeDb', 'root', 'password', { host: 'localhost', dialect: 'mysql' });