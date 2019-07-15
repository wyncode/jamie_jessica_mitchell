//npm install unirest
//npm install axios
//yarn add dotenv must be required in order to hide api keys in dev
    //create a file called .env and add API key
    //create a file called .gitignore with all of the common things to ignore so you do not push keys to the public repo
    //once you push, there is a dif process that we will learn later to add the secret .env to prod
    if(process.env.NODE_ENV !== 'production') {
      require('dotenv').config
     }
    
    const unirest = require('unirest')
    const express = require('express')
    const app = express()
    
    //assign a port
    const port = process.env.port || 3000;
    
    
    // function getNutritionInfo() {
    app.get('/food',(request, response) => {
      // assign variables from inputs
    const nutrient =  document.getElementById('nutrient_input').value
    const quant = document.getElementById('quant_input').value
    const food = document.getElementById('food_input').value
    
    unirest.get(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=How+much${nutrient}is+in+${quant}+${food}%3F}`)
      .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
      .header("X-RapidAPI-Key", `${process.env.SPOONACULAR_API_KEY}`)
      .end(function (result) {
      response.json(result.body)
    })
      })
    
    app.listen(port)
    
    