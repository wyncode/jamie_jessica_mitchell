import React from "react";
import "../Components/CSS/homepage.css";

const Home = () => (
    
      <div id="wrapper">
        <div id="logo">
          <img src="/images/Picture1.png" alt="Logo"/>
          <h3>Looking to learn more about nutrition?</h3>
          <div id="button">
            <button>
              <a href="/CreatePlan" 
                target="_blank"
              >
                Get your personalized meal plan here!
              </a>
            </button>
          </div>
        </div>
      </div>
    )

export default Home