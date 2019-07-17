import React from "react";
import "../Components/CSS/homepage.css";

const Home = () => (
  <div id="wrapper">
    <div id="logo">
      <img class="logo" src="/images/Picture1.png" alt="Logo" />
      <h3 id="homeHeader">Looking to learn more about nutrition?</h3>
      <div id="homeButton">
          <a className="mainButton" href="/createplan">Get your personalized meal plan here!</a>   
      </div>
    </div>
  </div>
);

export default Home;
