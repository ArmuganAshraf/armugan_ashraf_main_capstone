const express = require('express');
const router = express.Router();
const mealplan = require ('../data/mealData.json');

router.get('/', (req, res) => {
  res.json(mealplan);
});

module.exports = router;
