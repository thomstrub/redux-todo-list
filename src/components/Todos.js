import React, { Component } from 'react'
import { connect } from 'react-redux'

function Todos(props) {
 
    return (
      <div>
        <ul>
          {props.todos.map(todo => (
            <li key={todo.id}>{todo.task}: {todo.completed.toString()}</li>
          ))}
        </ul>
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos)
