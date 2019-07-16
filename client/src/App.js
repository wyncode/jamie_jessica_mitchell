import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingList from "./pages/Shoppinglist";
import AboutUs from "./pages/About";
import CreatePlan from "./pages/Createplan";
import MealPlan from "./pages/Mealplan";
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
        <Route exact path="/mealplan" component={MealPlan} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
