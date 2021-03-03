import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'

function TodoForm (props) {
  const [state, setState] = useState({
    newTodo: ''
  })

  function handleChange(event) {
    console.log(event.target.value)
    setState({ newTodo: event.target.value })
  }

  function handleSubmit( event ) {
    event.preventDefault()
    props.addTodo(state.newTodo)
    setState({ newTodo: '' })
  }

  
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={state.newTodo}
      />
      <button>Add Todo</button>
    </form>
  )
  

}

export default connect(null, {addTodo})(TodoForm)
