import React from "react";
import "../Components/CSS/shoppinglist.css";



let id = 0
class ShoppingList extends React.Component {
  state = {
    tasks:    [],
    newTask:  { description: '' }
  }

handleDescriptionChange = event => {
let { newTask } = this.state
newTask.description = event.target.value
this.setState({ newTask })
}

handleFormSubmit = event => {
event.preventDefault()
const { tasks, newTask } = this.state
if (newTask.description){
newTask.id = ++id
tasks.unshift(newTask)
this.setState({ tasks, newTask: { description: '' } })
}
}

deleteTask = id => {
let { tasks } = this.state
tasks = tasks.filter(task => task.id !== id)
this.setState({ tasks })
}

render(){
const { tasks, newTask } = this.state
return(
<div id="GroceryList">
<h1 id="GroceryListTitle">Grocery List</h1>
<table  id="GroceryListTable">
  <tbody id="tableBody" >
    {
      tasks.map(task => (
        <tr id={task.id} key={task.id}>
          <td >{task.description}</td>
          <td id="buttons">
            <button
              className="groceryButton"
              onClick={ () => { this.deleteTask(task.id) }}
              >
              Got it!
            </button>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>

<form className="GroceryListInput" onSubmit={this.handleFormSubmit}>
  <input
    type="text"
    autoComplete="off"
    
    value={newTask.description}
    onChange={this.handleDescriptionChange}
  />
</form>
</div>
)
}
}

export default ShoppingList;
