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
        const sql = "select id from users where id = " + id;
        try {
            const [data] = await this.connection.query(sql);
            if (data.length) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            throw err;
        } finally {
            this.connection.release();
        }
    }

    // 로그인
    async login(id, pw) {
        console.log("----------START LOGIN----------");
        this.connection = await this.pool.getConnection();
        const sql = "select id, password from users where id = " + id + " and password = " + pw;
        try {
            const [data] = await this.connection.query(sql);
            if (data.length) {
                return true;            // 로그인 성공
            } else {
                return false;            // 로그인 실패
            }
        } catch (err) {
            throw err;
        } finally {
            this.connection.release();
        }
    }
}

exports.modelController = modelController;

