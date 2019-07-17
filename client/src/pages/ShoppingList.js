import React from "react";
import "./shoppinglist.css";


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
<React.Fragment>
<h1>Grocery List</h1>
<table >
  <tbody >
    {
      tasks.map(task => (
        <tr id={task.id} key={task.id}>
          <td >{task.description}</td>
          <td >
            <button
              className="btn btn-outline-success"
              onClick={ () => { this.deleteTask(task.id) }}
              >
              Check
            </button>
          </td>
        </tr>
      ))
    }
  </tbody>
</table>
<hr/>
<form onSubmit={this.handleFormSubmit}>
  <input
    
    type="text"
    autoComplete="off"
    className="form-control"
    value={newTask.description}
    onChange={this.handleDescriptionChange}
  />
</form>
</React.Fragment>
)
}
}

export default ShoppingList;
