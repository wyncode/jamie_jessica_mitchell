import React from "react";

//CreatePlan Form Component
//Diet types, foods you don't like, health level, meals per day
//---------------------------------------------------------------

class CreatePlan extends React.Component {
  state = {
    selectValue: "none",
    dontLikeValue: "",
    healthValue: "",
    mealsValue: ""
  };

  //Form Submittion Functioon
  handleSubmit = event => {
    event.preventDefault();
    // unirest
    //   .get(`/food`)
    //   .then(response => this.setState({ movies: response.data }));
  };

  //OnChange Function for Select Input
  handleSelectChange = event => {
    this.setState({ selectValue: event.target.value });
  };

  //OnChange Function for Things You Don't Like Input Values
  handleDontLikeChange = event => {
    this.setState({ dontLikeValue: event.target.value });
  };

  //OnChange Function for Health Scale
  handleHealth = event => {
    this.setState({ healthValue: event.target.value });
  };

  //OnChange Function for Meals Per Day
  handleMealsChange = event => {
    this.setState({ mealsValue: event.target.value });
  };

  //Render Function
  render() {
    return (
      <>
        <h1>Form</h1>
        <form id="createPlanForm" onSubmit={this.handleSubmit}>
          {/* Select Diet */}
          <div className="dietSelector">
            <label htmlFor="selectDiet">Diet Options: </label>
            <select
              id="selectDiet"
              value={this.state.selectValue}
              onChange={this.handleSelectChange}
            >
              <option value="choose">Choose One...</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="gluten-free">Gluten-Free</option>
              <option value="paleo">Paleo</option>
              <option value="ketogenic">Ketogenic</option>
              <option value="none">None</option>
            </select>
          </div>
          {/* Things You Don't Like */}
          <div className="dontLikeSelector">
            <label htmlFor="dontLike">Foods you don't like: </label>
            <input
              id="dontLike"
              type="text"
              placeholder="eg. squash, cantaloupe"
              value={this.state.dontLikeValue}
              onChange={this.handleDontLikeChange}
            />
          </div>
          {/* Health Scale */}
          <div className="healthScale">
            <label htmlFor="healthRange">Healthiness Range: </label>
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.healthValue}
              onChange={this.handleHealth}
            />
          </div>
          {/* Meals Per Day */}
          <div className="mealsPerDaySelector">
            <label htmlFor="mealsPerDay">Meals Per Day: </label>
            <input
              id="mealsPerDay"
              type="number"
              min="3"
              max="5"
              step="1"
              value={this.state.Value}
              onChange={this.handleMealsChange}
            />
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
