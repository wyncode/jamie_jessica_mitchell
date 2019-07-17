import React from "react";
import "../Components/CSS/form.css";
// import unirest from "unirest";

//CreatePlan Form Component
//Diet types, foods you don't like, health level, meals per day
//---------------------------------------------------------------

class CreatePlan extends React.Component {
  state = {
    selectDiet: "none",
    selectMeal: "",
    iLike: ""
  };

  //Form Submittion Functioon
  handleSubmit = event => {
    event.preventDefault();
    let { selectDiet, iLike, selectMeal } = this.state;
    let body = JSON.stringify({ selectDiet, iLike, selectMeal });
    fetch(`/food`, {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(recipes => {
        this.props.updateRecipes(recipes.recipes);
        this.props.history.push("/mealplan");
      })
      .catch(err => console.log(err));
  };

  // onChange function for input options
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Render Function
  render() {
    const { selectDiet, iLike, selectMeal } = this.state;
    console.log("HEY!!!!", this.props);
    return (
      <div id="formWrapper">
        <div id="formBody">
          <h1 id="formTitle">Let's Starting Cookin'!</h1>
          <form onSubmit={this.handleSubmit}>
            {/* Select Diet */}
            <div className="formElement">
              <label class="col-sm-2 col-form-label" htmlFor="selectDiet">
                Diet Options:{" "}
              </label>
              <select
                id="selectDiet"
                name="selectDiet"
                value={selectDiet}
                onChange={this.handleChange}
                className="form-control"
              >
                <option value="choose">Choose One...</option>
                <option value="vegan">Vegan</option>
                <option value="vegetarian">Vegetarian (Lacto and Ovo)</option>
                <option value="paleo">Paleo</option>
                <option value="ketogenic">Ketogenic</option>
                <option value="primal">Primal</option>
              </select>

              {/* Meal Select */}
              <div className="formElement">
                <label class="col-sm-2 col-form-label" htmlFor="selectMeal">
                  Meal Options:{" "}
                </label>
                <select
                  id="selectMeal"
                  name="selectMeal"
                  value={selectMeal}
                  onChange={this.handleChange}
                  className="form-control"
                >
                  <option value="choose">Choose One...</option>
                  <option value="breakfast">Breakfast</option>
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="dessert">Dessert</option>
                  <option value="snack">Snack</option>
                </select>
              </div>
              {/* Things You Like */}
              <div className="formElement">
                <label class="col-sm-2 col-form-label" htmlFor="iLike">
                  Likes:{" "}
                </label>
                <input
                  id="iLike"
                  name="iLike"
                  type="text"
                  placeholder="spinach, tofu, kale...."
                  value={iLike}
                  onChange={this.handleChange}
                  className="form-control"
                  autoComplete="off"
                />
              </div>
              <button id="submitButton" className="btn btn-outline-success">
                Generate Meals
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePlan;
