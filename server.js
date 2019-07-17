//npm install unirest
//npm install axios
//yarn add dotenv must be required in order to hide api keys in dev
//create a file called .env and add API key
//create a file called .gitignore with all of the common things to ignore so you do not push keys to the public repo
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const unirest = require("unirest");
const parser = require("body-parser");
const express = require("express");
const app = express();

//assign BE to port 8080
//linked to front end with a proxy. see package.json file
const port = process.env.port || 8080;

//middleware parses the JSON data and acts as a bridge between OS and data
app.use(parser.json());

//connects our API request from CreatePlan.js to the API URL
app.post("/food", (request, response) => {
  console.log(request.body);
  const { selectDiet, iLike, selectMeal } = request.body;
  let url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=7&tags=${selectDiet}%3C${iLike}%3C${selectMeal}`;

  unirest
    .get(url)
    .header(
      "X-RapidAPI-Host",
      "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
    )
    .header("X-RapidAPI-Key", `${process.env.SPOONACULAR_API_KEY}`)
    .end(function(result) {
      console.log("*".repeat(30), "\n", result.body);
      response.json(result.body);
    });
});

app.listen(port, () => {
  console.log("Magic happening here...------------------------ 🌈🦄");
});
