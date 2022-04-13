const express = require('express');
const router = express.Router();

const modelController = require('../models/modelController');
const controller = new modelController.modelController();

controller.init();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send("users");
})

// createUser
router.get('/createUser', function(req, res, next) {
  res.render('users/createUser');
});

router.post('/createUser', (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const name = req.body.name;
  let userInfo = {id:id, password:password, name:name};

  const checkUser = controller.checkUser(id);       // 회원 중복 확인 변수 false => 중복있음
  if (!checkUser) {
    res.json({'result':'fail'});
  } else {
    const checkCreate = controller.createUser(userInfo);
    if (checkCreate) {
      console.log('checkCreate : success');
      res.json({'result':'ok'});
    }
  }
})

module.exports = router;
