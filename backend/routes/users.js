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
  res.render('users/createUser', {});
});

module.exports = router;
