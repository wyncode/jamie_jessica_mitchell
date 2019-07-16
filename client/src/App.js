import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import ShoppingList from "./pages/ShoppingList";
import AboutUs from "./pages/About";
import CreatePlan from "./pages/CreatePlan";
import MealPlan from "./pages/MealPlan";
import Navbar from "./Components/Navbar";

class App extends React.Component {
  state = { recipes: [] };

  updateRecipes = value => {
    this.setState({ recipes: value });
  };

  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={AboutUs} />
          <Route
            exact
            path="/createplan"
            render={props => (
              <CreatePlan {...props} updateRecipes={this.updateRecipes} />
            )}
          />
          <Route exact path="/shoppinglist" component={ShoppingList} />
          <Route
            exact
            path="/mealplan"
            render={props => (
              <MealPlan {...props} recipes={this.state.recipes} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
