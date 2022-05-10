const hashPassword = require('../algirithm/hash').hashPassword;

const express = require('express');
const router = express.Router();

const UserController = require('../models/UserController');
const controller = new UserController.UserController();

controller.init();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send("users");
})


// createUser
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

// login
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


module.exports = router;
