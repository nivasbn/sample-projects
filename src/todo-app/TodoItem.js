import React from 'react'

const TodoItem=(props)=> {
  return (
    <div><li>{props.todo.title}</li></div>
  )
}

export default TodoItem