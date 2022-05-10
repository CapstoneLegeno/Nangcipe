var express = require('express');
var router = express.Router();

const modelController = require('../models/UserController');
const controller = new modelController.modelController();

controller.init();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('API Router');
});

router.get('/test', async function(req, res, next) {
  res.json(await controller.queryTest());
  next();
});

// router.get('/recipe', async function(req, res, next) {
//   req.json(await );
// }

module.exports = router;