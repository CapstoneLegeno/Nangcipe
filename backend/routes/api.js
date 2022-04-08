var express = require('express');
var router = express.Router();

const modelController = require('../models/modelController');
const controller = new modelController.modelController();

controller.init();

/* GET users listing. */

router.get('/', (req, res, next) => {
  res.send('Router');
});

router.get('/test', async function(req, res, next) {
  // res.send('1111');
  res.send(await controller.queryTest());
});

module.exports = router;
