import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingList from "./pages/shoppinglist";
import AboutUs from "./pages/about";
import CreatePlan from "./pages/createplan";
import MealPlan from "./pages/mealplan";
import RecipeInfo from "./pages/recipeInfo"
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutUs} />
        <Route exact path="/createplan" component={CreatePlan} />
        <Route exact path="/shoppinglist" component={ShoppingList} />
        <Route exact path="/mealplan" component={MealPlan}/>
        <Route exact path="/RecipeInfo" component ={RecipeInfo} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
