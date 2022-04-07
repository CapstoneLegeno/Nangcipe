// modelController.js

// 사용할 DB
const { reject } = require('lodash');
const mysql = require('mysql2/promise');

// DB config
const config = require('./config');

class modelController {
    static connection;
    static pool;

    // connect db
    async init() {
        try {
            this.pool = mysql.createPool(config, (err) => { if (err) throw err });
            this.connection = await this.pool.getConnection(async conn => conn);
            this.connection.release();
        } catch (err) {
            throw err;
        }
    }

    // query test
    async quetyTest() {
        this.connection = await this.pool.getConnection(async conn => conn);
        try {
            const [data] = await this.connection.query('SELECT * FROM TEST');
            this.connection.release();
            return data;
        } catch (err) {
            throw err;
        }
    }
    
        
    
};

exports.modelController = modelController;

