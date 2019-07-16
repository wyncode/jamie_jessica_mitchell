import React from "react";
import unirest from "unirest";

//CreatePlan Form Component
//Diet types, foods you don't like, health level, meals per day
//---------------------------------------------------------------

class CreatePlan extends React.Component {
  state = {
    recipes: [],
    selectDiet: "none",
    dontLike: "",
    iLike: "",
    calorieScale: "2500"
  };

  //Form Submittion Functioon
  handleSubmit = event => {
    event.preventDefault();
    unirest
      .get(`/food`)
      .then(response => this.setState({ recipes: response.data }));
  };

  // onChange function for input options
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Render Function
  render() {
    const { selectDiet, dontLike, calorieScale } = this.state;
    return (
      <>
        <h1>Form</h1>
        <form id="createPlanForm" onSubmit={this.handleSubmit}>
          {/* Select Diet */}
          <div className="dietSelector">
            <label htmlFor="selectDiet">Diet Options: </label>
            <select
              id="selectDiet"
              name="selectDiet"
              value={selectDiet}
              onChange={this.handleChange}
            >
              <option value="choose">Choose One...</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian (Lacto and Ovo)</option>
              <option value="paleo">Paleo</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="primal">Primal</option>
            </select>
          </div>
          {/* Things You Don't Like */}
          <div className="dontLikeSelector">
            <label htmlFor="dontLike">Dislikes: </label>
            <input
              id="dontLike"
              name="dontLike"
              type="text"
              placeholder="eg. squash, cantaloupe"
              value={dontLike}
              onChange={this.handleChange}
            />
          </div>
          {/* Things You Like */}
          <div className="iLikeSelector">
            <label htmlFor="iLike">Likes: </label>
            <input
              id="iLike"
              name="iLike"
              type="text"
              placeholder="eg. steak"
              value={dontLike}
              onChange={this.handleChange}
            />
          </div>
          {/* Calorie Scale */}
          <div className="calorieScale">
            <label htmlFor="calorieRange">Maximum Calories: </label>
            <input
              id="calorieRange"
              name="calorieScale"
              type="range"
              min="1800"
              max="5000"
              value={calorieScale}
              onChange={this.handleChange}
            />
            {calorieScale} calories per day
          </div>
          <div className="formbutton">
            <button>Submit</button>
          </div>
        </form>
      </>
    );
  }
}

export default CreatePlan;
