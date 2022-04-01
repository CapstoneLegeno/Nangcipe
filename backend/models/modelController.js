// modelController.js

// 사용할 DB
var mysql = require('mysql2');

// DB config
var config = require('./config');

// connect db
exports.init = function init() {
    var conn = mysql.createConnection(config, (err) => { if (err) throw err});
    conn.connect((err) => {if (err) throw err});
    return conn;
};
    
