const express = require('express');
const router = express.Router();

const modelController = require('../models/modelController');
const controller = new modelController.modelController();

controller.init();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send("users");
  next();
})


// createUser
router.get('/signUp', function(req, res, next) {
  res.render('users/signUp');
  next();
});

router.post('/signUp', async (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const name = req.body.name;
  let userInfo = {id:id, password:password, name:name};

  const checkUser = await controller.checkUser(id);       // 회원 중복 확인 변수 true => 중복있음
  console.log("--------------------checkUser : ", await controller.checkUser(id));
  if (await checkUser) {    // 중복이 있다면
    res.json({'result':'fail'});
  } else {
    const checkCreate = await controller.createUser(userInfo);
    if (checkCreate) {
      console.log('checkCreate : success');
      res.json({'result':'ok'});
    }
  }
  next();
})

// createUser
router.get('/login', function(req, res, next) {
  res.render('users/login');
  next();
});

router.post('/login', async (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  let userInfo = {id:id, password:password};

  const checkLogin = await controller.login(id, password);
  if (await checkLogin) {
    res.json({'result': "success"});
  } else {
    res.json({'result': 'false'});
  }
  next();
})


module.exports = router;
