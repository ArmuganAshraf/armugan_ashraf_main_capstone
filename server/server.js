const express = require("express");
var cors = require('cors')
const mealplan = require('./routes/mealplan')

const app = express();

app.use(cors());
app.use(express.json());


app.use('/', mealplan);


app.listen(8080, () => console.log("capstone port in progress..."));