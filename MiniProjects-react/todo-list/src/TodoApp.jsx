import React, { useEffect, useReducer, useState } from 'react'
import TodoList from './TodoList'

const initstate = [];

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {id: Date.now(), title: action.title, completed: false}]
        case "TOGGLE_TODO":
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.id)
    }
}

export default function TodoApp() {
    const [state, dispatch] = useReducer(reducer, initstate);
    const [text, setText] = useState('');

    useEffect(() => {
        fetch('./todos.json')
          .then(response => response.json())
          .then(todos => dispatch({ type: 'LOAD_TODOS', todos }));
      }, []);

    function handleSubmit (e) {
        e.preventDefault();
        dispatch({type: "ADD_TODO", title: text});
        setText('');
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button type="submit">Add</button>
        </form>
        <TodoList todos={state} dispatch={dispatch}/> 
    </div>
  )
}
