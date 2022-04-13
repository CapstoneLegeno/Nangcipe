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

    // 회원가입
    // userInfo : 객체타입
    async createUser(userInfo) {
        console.log("----------STRAT CREATEUSER----------");
        this.connection = await this.pool.getConnection();
        const sql = "insert into users set?";
        try {
            await this.connection.query(sql, userInfo);
            return true
        } catch (err) {
            throw err;
        } finally {
            this.connection.release();
        }
        
    }

    // 회원 중복 체크
    async checkUser(id) {
        console.log("----------START CHECKUSER----------");
        this.connection = await this.pool.getConnection();
        const sql = "select id from users where id = ?";
        this.connection.query(sql, id, (err, rows) => {
            if (err) throw err;
            if (rows.length) {              // 값이 있으면
                return false;
            } else {                        // 값이 없으면
                return true;
            }
        });
    }
}

exports.modelController = modelController;

