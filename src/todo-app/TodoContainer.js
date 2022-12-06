import React from 'react'
import TodoList from './TodoList';

function TodoContainer() {
    const state = {
        todos: [
            {
                id: 1,
                title: "Setup development environment",
                completed: true
            },
            {
                id: 2,
                title: "Develop website and add content",
                completed: false
            },
            {
                id: 3,
                title: "Deploy to live server",
                completed: false
            }
        ]
    };
    return (
        <div>
            <h1>TodoContainer</h1>
            
<TodoList todoli={state.todos}/>
        </div>
    )
}

export default TodoContainer