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
    res.header("Access-Control-Allow-Origin", "*");
    res.json({data});
})

router.get('/foodsearch', (req, res, next) => {
  res.render('recipe/foodsearch');
})

router.post('/foodsearch', async (req, res) => {
  const food = req.body.food;

  const [data] = await controller.foodSearch(food);
  res.header("Access-Control-Allow-Origin", "*");
  res.json({data});
})

router.post('/c/:id', async (req, res) => {
  const { id } = req.params;
  const [rows,] = await controller.foodSearchById(id);
  const { comment, score } = req.body;

  try {
  
    if (rows.length > 0) {
      await controller.writeCommentById(id, comment, score);
      console.log(`COMMENT : ${comment} SCORE: ${score}`);
    } else {
      res.status(500).json({ err: "no recipes found"})
    }
  } catch (e) {
    console.log(e)
    return res.status(500).json({ err: "Undefined"});
  }

  res.json({status: 200});
})

router.get('/c/:id', async (req, res) => {
  const { id } = req.params;
  const comments = [];
  
  try {
    const [ rows ] = await controller.getCommentsById(id);
    console.log(rows);
    for (const [_id, row] of Object.entries(rows)) {
      const { id, comment, score } = row;
      comments.push({ id, comment, score});
    }

  } catch (e) {
    console.log(e)
    return res.status(500).json({ err: 'Undefined'});
  }
  res.json(comments);
});

module.exports = router;
