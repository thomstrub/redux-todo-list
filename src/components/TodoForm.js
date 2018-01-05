import React, { Component } from 'react'

class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleChange = (event) => {
    console.log(event.target.value)
    this.setState({ newTodo: event.target.value })
  }

  render () {
    return (
      <div>
        <input
          onChange={this.handleChange}
          value={this.state.newTodo}
        />
        <button>Add Todo</button>
      </div>
    )
  }

}

export default TodoForm
