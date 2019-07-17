import React from "react";
import "../Components/CSS/mealplan.css";
// import unirest from 'unirest'
// import { Link } from 'react-router-dom'

class MealPlan extends React.Component {
  state = { recipes: [] };

  render() {
    return (
      <div id="Meal Plan">
        <h1 id="title">Meal Plan</h1>
        <div className="card-group">
          
          {
            this.props.recipes.map(recipe => {
              console.log(recipe);
              return (
                <div className="card">
                  <img src={recipe.image} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">{recipe.title}</h5>
                    <p className="card-text">{recipe.instructions}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

export default MealPlan;
