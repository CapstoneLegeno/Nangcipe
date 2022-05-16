const express = require('express');
const router = express.Router();

const RecipeController = require('../models/RecipeController');
const controller = new RecipeController.RecipeController();


/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send("recipe");
})

router.get('/search', (req, res, next) => {
    res.render('recipe/search');
})
  
router.post('/search', async (req, res) => {
    const ingredients = req.body.ingredients;

    const [data] = await controller.search(ingredients);
    res.json({data});
})

router.get('/foodsearch', (req, res, next) => {
  res.render('recipe/foodsearch');
})

router.post('/foodsearch', async (req, res) => {
  const food = req.body.food;

  const [data] = await controller.foodSearch(food);
  res.json({data});
})

module.exports = router;
