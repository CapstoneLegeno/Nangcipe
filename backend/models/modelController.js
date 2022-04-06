// modelController.js

// 사용할 DB
var mysql = require('mysql2');

// DB config
var config = require('./config');
var cloneDeep = require('lodash/cloneDeep');

exports.modelController = class {
    test = {};
    // connect db
    init() {
        var conn = mysql.createConnection(config, (err) => { if (err) throw err});
        conn.connect((err) => { if (err) throw err });
        return conn;
    }

    // query test
    quetyTest(conn) {
        conn.connect((err) => { if (err) throw err });
        conn.query('select * from test', (err, rows, fields) => {
            if (err) throw err;
            var data = {
                id: rows[0].id,
                name: rows[0].name,
            };
            console.log(data);
            this.test = cloneDeep(data);
        });
        conn.end();
        return(this.test);
    }
};

