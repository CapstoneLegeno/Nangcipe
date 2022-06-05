const hashPassword = require('../algirithm/hash').hashPassword;

const express = require('express');
const router = express.Router();

const UserController = require('../models/UserController');
const controller = new UserController.UserController();

// 토큰 모듈
const jwt = require("jsonwebtoken");
// 토큰 환경변수 모듈
const dotenv = require("dotenv");
// 토큰검증 미들웨어
// const { auth } = require("./autoMiddleware.js");


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send("users");
})


// Signup
// 회원가입
router.get('/signUp', function(req, res, next) {
  res.render('users/signUp');
});

router.post('/signUp', async (req, res) => {
  const id = req.body.id;
  const password = hashPassword(req.body.password);
  const name = req.body.name;
  let userInfo = {id:id, password:password, name:name};

  const checkUser = await controller.checkUser(id);       // 회원 중복 확인 변수 true => 중복있음
  console.log("--------------------checkUser : ", await controller.checkUser(id));
  if (await checkUser) {    // 중복이 있다면
    res.json({'result':'fail'});1
  } else {
    const checkCreate = await controller.createUser(userInfo);
    if (checkCreate) {
      res.json({'result':'ok'});
    }
  }
})

// LogIn
// 로그인
router.get('/login', function(req, res, next) {
  res.render('users/login');
});

router.post('/login', async (req, res) => {
  const id = req.body.id;
  const password = hashPassword(req.body.password);

  const checkLogin = await controller.login(id, password);
  if (await checkLogin) {
    // 로그인 성공
    const key = process.env.SECRET_KEY;
    let token = "";

    token = jwt.sign(
      {
        type: 'JWT',
        id: id, 
      },
      {
        expiresIn: "30m",
        issuer: "root"
      }
    );
    console.log("token");
    res.json({'result': "success"});
    return res.status(200).json({
      code: 200,
      message: "token is created",
      token: token,
    });
  } else {
    res.json({'result': 'false'});
  }
});


// 사용자의 재료 조회
router.get('/getingredients', (req, res, next) => {
  res.render('users/getingredients');
});

router.post('/getingredients', async (req, res, next) => {
  const id = req.body.id;

  const [data] = await controller.getIngredients(id);
  res.json(data);
});

// 사용자의 재료 삽입
router.get('/setingredients', (req, res, next) => {
  res.render('users/setingredients');
});

router.post('/setingredients', async (req, res, next) => {
  const user_id = req.body.user_id;
  const user_ingredient = req.body.user_ingredient;
  let info = {user_id:user_id, user_ingredient:user_ingredient};

  await controller.setIngredients(info);
  res.json({'result':'ok'});
});

module.exports = router;
