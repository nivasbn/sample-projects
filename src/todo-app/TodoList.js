import React from 'react'
import TodoItem from './TodoItem'

const TodoList=(props)=> {
  return (
    <div><ul>{props.todoli.map(todo => (
        <TodoItem key={todo.id} todo={todo}/>
    ))}</ul></div>
  )
}

export default TodoList