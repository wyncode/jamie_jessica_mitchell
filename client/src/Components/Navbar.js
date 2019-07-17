import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/Navbar.css";

const Navbar = () => (
  <nav>
    <ul id="navList">
      <li class="item">
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/about">
          About{" "}
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/createplan">
          Create Plan
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/shoppinglist">
          Shopping List
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/mealplan">
          Meal Plan
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
