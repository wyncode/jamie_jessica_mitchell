import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePlan from "./pages/CreatePlan";
// import ShoppingList from "./pages/ShoppingList";
// import AboutUs from "./pages/AboutUs";
// import Navbar from "./Components";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={AboutUs} /> */}
        <Route exact path="/createplan" component={CreatePlan} />
        {/* <Route exact path="/shoppinglist" component={ShoppingList} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
