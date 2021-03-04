import React, { Component } from 'react'
import { connect } from 'react-redux'
import {toggleTodo} from '../actions/todoActions'

function Todos(props) {
 
    return (
      <div>
        <ul>
          {props.todos.map(todo => (
            <li key={todo.id}
                onClick={() => props.toggleTodo(todo.id)}
            >
            {todo.task}: {todo.completed.toString()}
            </li>
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

export default connect(mapStateToProps, {toggleTodo})(Todos)
