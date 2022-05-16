const hashPassword = require('../algirithm/hash').hashPassword;

const express = require('express');
const router = express.Router();

const UserController = require('../models/UserController');
const controller = new UserController.UserController();


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
      console.log('checkCreate : success');
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
    res.json({'result': "success"});
  } else {
    res.json({'result': 'false'});
  }
})

router.get('/ingredients', (req, res, next) => {
  res.render('users/ingredients');
})

router.post('/ingredients', async (req, res, next) => {
  const id = req.body.id;

  const [data] = await controller.getIngredients(id);
  res.json(data);
})


module.exports = router;
