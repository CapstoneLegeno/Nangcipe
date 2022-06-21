// modelController.js

// 사용할 DB
const mysql = require('mysql2/promise');
const mysql2 = require('mysql2');

// DB config
const config = require('./config');

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

    // 레시피 검색 - 재료로 레시피를 조회하는 것
    // search
    async search(data) {
        console.log("----------START SEARCH----------");
        let result;

        this.connection = await this.pool.getConnection();
        let sql = "select * from recipes where ";
        
        if (data.length >= 1) {
            for(let x in data) {
                sql += "ingredients like " + "'%" + data[x] + "%' and ";
            }
            sql = sql.slice(0, -5);
            sql += ";";
            console.log(sql);
            try {
                result = await this.connection.query(sql);
            
            } catch (err) {
                throw err; 
            } finally {
                this.connection.release();
            }
        } else {
            result = "재료 데이터를 입력해주세요.";
        }
        
        return result;
    }

    async foodSearch(food) {
        console.log("----------START FOODSEARCH()----------");
        let [result] = "";

        this.connection = await this.pool.getConnection();
        let sql = "select * from recipes where food_name = '" + food + "'";
        try {
            [result] = await this.connection.query(sql);
        } catch (err) {
            throw err;
        } finally {
            this.connection.release();
        }
        return result;
    }

  async foodSearchById(foodId) {
    this.connection = await this.pool.getConnection();
    const sql = `SELECT * FROM RECIPES WHERE id=?`;
    var results = [];
    try {
      results = await this.connection.query(sql, [foodId]);
    } catch (err) {
      throw err;
    } finally {
      this.connection.release();
    }
    return results;
  }

  async writeCommentById(foodId, comments, score) {
    this.connection = await this.pool.getConnection();
    const sql = `INSERT INTO comments (recipeId, comment, score) VALUES (?, ?, ?)`;
    const params = [foodId, comments, score];
    try {
      console.log (sql, params);
      await this.connection.query(sql, params);
    } catch (err) {
      throw err;
    } finally {
      this.connection.release();
    }
    return true;
  }

  async getCommentsById(foodId) {
    this.connection = await this.pool.getConnection();
    const sql = 'SELECT * FROM comments WHERE recipeId = ?' ;
    const params = [foodId];
    var results = [];
    try {
      results = await this.connection.query(sql, [foodId]);
    } catch (err) {
      throw err;
    } finally {
      this.connection.release();
    }
    return results;
  }
}

exports.RecipeController = RecipeController;

