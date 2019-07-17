import React from "react";
import "../Components/CSS/mealplan.css";
// import unirest from 'unirest'
// import { Link } from 'react-router-dom'

class MealPlan extends React.Component {
  state = { recipes: [] };

  render() {
    return (
      <div id="Meal Plan">
        <h1 id="title">Meals for the Week</h1>
        <div className="card-group d-flex flex-wrap flex-md-row flex-column"
        >
          
          {
            this.props.recipes.map(recipe => {
              console.log(recipe);
              return (
                  <div className="card">
                    <a 
                      href={recipe.sourceUrl}
                      target="_blank"
                    >
                        <img
                          src={recipe.image} 
                          className="card-img-top" 
                          alt="recipe"
                        /> 
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{recipe.title}</h5>
                      <p className="card-text"><small className="text-muted">Ready in {recipe.readyInMinutes} minutes</small></p>
                    </div>
                  
                  </div>
                
              )
            })
          }
        </div>
        <div id="blurb">
          We've selected 7 meals that fit your individual diet and needs.Bon Apetite! 
        </div>
      </div>
     
    );
  }
}

export default MealPlan;
