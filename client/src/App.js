import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShoppingList from "./pages/Shoppinglist";
import AboutUs from "./pages/About";
import CreatePlan from "./pages/Createplan";
import MealPlan from "./pages/Mealplan";
import Navbar from "./Components/Navbar";

class App extends React.Component {
  state = { userChoices: {} };

  updateChoice = (choice, value) => {
    let choices = this.state.userChoices;
    choices[choice] = value;
    this.setState({ userChoices: choices });
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
              <CreatePlan {...props} updateChoice={this.updateChoice} />
            )}
          />
          <Route exact path="/shoppinglist" component={ShoppingList} />
          <Route
            exact
            path="/mealplan"
            render={props => (
              <MealPlan {...props} userChoices={this.state.userChoices} />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
