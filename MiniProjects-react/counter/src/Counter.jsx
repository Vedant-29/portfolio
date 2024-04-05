import React, { useReducer } from 'react'
import './Counter.css'

export default function Counter() {

    const initState = 0;

    function reducer(state, action) {
        switch (action.type) {
            case 'incr':
                return state + 1;
            case 'dec':
                return state - 1;
        }
    }


    const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
        <h1>Counter: </h1>
        <span>{state}</span>
        <div>
            <button onClick={() => dispatch({type: 'incr'})}>+</button>
            <button onClick={() => dispatch({type: 'dec'})}>-</button>
        </div>
    </div>
  )
}
