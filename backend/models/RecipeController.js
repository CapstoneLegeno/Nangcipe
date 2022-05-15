// modelController.js

// 사용할 DB
const mysql = require('mysql2/promise');
const mysql2 = require('mysql2');

// DB config
const config = require('./config');
const { forEach } = require('lodash');

class RecipeController {
    static connection;
    static pool;

    constructor() {
        this.init();
    }

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

    async search(data) {
        console.log("----------START SEARCH----------");
        this.connection = await this.pool.getConnection();
        let sql = "select * from recipes where ";
        for(let x in data) {
            sql += "like ingredient = " + "'" + data[x] + "'";
            if(data[x+1] != null) {
                sql += " and";
            }
        }
        console.log(sql);
        // console.log(sql);

        // const sql = "select id, password from users where id = " + "'" + id + "'" + ' and password = ' + "'" + pw + "'";
        // try {
        //     const [data] = await this.connection.query(sql);
        //     if (data.length) {
        //         return true;            // 로그인 성공
        //     } else {
        //         return false;            // 로그인 실패
        //     }
        // } catch (err) {
        //     throw err;
        // } finally {
        //     this.connection.release();
        // }
    }


}

exports.RecipeController = RecipeController;

