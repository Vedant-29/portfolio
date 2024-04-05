import React from 'react';

export default function TodoList({todos, dispatch}) {
    return (
        <ul>
            {todos.map(todo => 
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</span>
                        <button onClick={() => dispatch({type: "TOGGLE_TODO", id: todo.id})}>Toggle</button>
                        <button onClick={() => dispatch({type: "DELETE_TODO", id: todo.id})}>Delete</button>
                    </li>
                )}
        </ul>
    )
}

