const express = require("express");
var cors = require('cors');
const mealplan = require('./data/mealData.json');
const parser = require('body-parser');

const app = express();
app.use(cors());
app.use(parser.json());

app.get('/', (req, res) => {
    res.json(mealplan);
});
  
app.get('/calendar',(req,res) => {
    res.json(mealplan);
})

app.post('/',(req,res)=>{
    const plan = req.body;
   res.json(plan);

   const index = mealplan.findIndex( p => p.id === plan.meal.id);
   let updated = Object.assign({}, plan.meal);
   mealplan[index] = updated;

})

app.listen(8080, () => console.log("capstone port in progress..."));