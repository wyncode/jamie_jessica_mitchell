import React from 'react'
import "./mealplan.css"
// import unirest from 'unirest'
// import { Link } from 'react-router-dom'


class MealPlan extends React.Component {
  state = { }

  render(){
   
    return(
      <div id="Meal Plan">
        <h1 id="title">Meal Plan</h1>
        <table>
          <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
          </tr>
        <tr>
          <h3>Breakfast</h3> 
          <td></td>
          <td></td>
          <td></td> 
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <h3>Lunch</h3> 
          <td></td>
          <td></td>
          <td></td> 
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <h3>Dinner</h3> 
          <td></td>
          <td></td>
          <td></td> 
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        </table>
        
      </div>
    )
  }

  
}

export default MealPlan;
