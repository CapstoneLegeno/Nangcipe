// modelController.js

// 사용할 DB
const mysql = require('mysql2/promise');
const mysql2 = require('mysql2');

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
        } catch (err) {
            throw err;
        } finally {
            this.connection.release();
        }
    }

    // query test
    async queryTest() {
        this.connection = await this.pool.getConnection();
        try {
            const [data] = await this.connection.query('SELECT * FROM TEST');
            return data;
        } catch (err) {
            throw err;
        } finally {
            this.connection.release();
        }
    }
}

exports.modelController = modelController;

