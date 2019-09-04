const express = require('express');
const router = express.Router();
const parser = require('body-parser');
const mealplan = require ('../data/mealData.json');

router.get('/', (req, res) => {
  res.json(mealplan);
});

router.get('/calendar',(req,res) => {
  res.json(mealplan);
})

router.post('/calendar',(req,res)=>{
  const plan = req.body.plans;
 //res.json(plan);
 console.log(plan);
})

module.exports = router;
