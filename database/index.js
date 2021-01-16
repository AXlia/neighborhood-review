const info = require('./info.js');

const mysql      = require('mysql');
const connection = mysql.createConnection(info);

connection.connect();

module.exports = connection;