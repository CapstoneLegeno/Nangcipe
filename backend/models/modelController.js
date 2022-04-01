// controlDb

var mysql = require('mysql2');

var config = require('./config');

exports.init = function init() {
    var conn = mysql.createConnection(config, (err) => { if (err) throw err});
    return conn;
};
    
