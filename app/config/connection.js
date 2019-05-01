// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var connection;
var mysql = require('mysql')
// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);

} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3309,
    dialect: "mysql",
  })
}

var sequelize = new Sequelize("chirpy", "root", "", {
  host: "localhost",
  port: 3309,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});


connection.connect();
// Exports the connection for other files to use
module.exports = sequelize;
