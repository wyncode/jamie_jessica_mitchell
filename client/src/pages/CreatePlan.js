import React from "react";
import "../Components/CSS/form.css";
// import unirest from "unirest";

//CreatePlan Form Component
//Diet types, foods you don't like, health level, meals per day
//---------------------------------------------------------------

class CreatePlan extends React.Component {
  state = {
    selectDiet: "none",
    iLike: ""
  };

  //Form Submittion Functioon
  handleSubmit = event => {
    event.preventDefault();
    let { selectDiet, iLike } = this.state;
    let body = JSON.stringify({ selectDiet, iLike });
    // console.log(body)
    fetch(`/food`, {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(response => this.props.updateRecipes(response.data))
      .catch(err => console.log(err));
  };

  // onChange function for input options
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  //Render Function
  render() {
    const { selectDiet, iLike } = this.state;
    return (
      <div id="formBody">
        <div id="createPlanForm">
          <h1>Form</h1>
          <form onSubmit={this.handleSubmit}>
            {/* Select Diet */}
            <div className="innerForm">
              <div className="formElement">
                <label className="labels" htmlFor="selectDiet">
                  Diet Options:{" "}
                </label>
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
              {/* <div className="dontLikeSelector">
            <label htmlFor="dontLike">Dislikes: </label>
            <input
              id="dontLike"
              name="dontLike"
              type="text"
              placeholder="eg. squash, cantaloupe"
              value={dontLike}
              onChange={this.handleChange}
            />
            </div> */}
              {/* Things You Like */}
              <div className="formElement">
                <label className="labels" htmlFor="iLike">
                  Likes:{" "}
                </label>
                <input
                  id="iLike"
                  name="iLike"
                  type="text"
                  placeholder="eg. steak"
                  value={iLike}
                  onChange={this.handleChange}
                />
              </div>
              <button id="formButton">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreatePlan;
