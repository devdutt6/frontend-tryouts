import React,{useReducer} from 'react'

const initialState = {
    first: 0,
    second: 10
};
const reducer = (state ,action) => {
    switch(action.type) {
        case 'increment':
            return { ...state , first: state.first +action.value};
        case 'decrement':
            return { ...state , first: state.first -action.value};
        case 'increment2':
            return { ...state , second: state.second +action.value};
        case 'decrement2':
            return { ...state , second: state.second -action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

export const CountTwo = () => {
    const [count , dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h2>
                Count- {count.first}<br/>
                Count2- {count.second}
            </h2>
            <button onClick={() => { dispatch({type: 'increment', value: 1}) }}>increment</button>
            <button onClick={() => { dispatch({type: 'decrement', value: 1}) }}>decrement</button>
            <button onClick={() => { dispatch({type: 'increment', value: 5}) }}>increment 5</button>
            <button onClick={() => { dispatch({type: 'decrement', value: 5}) }}>decrement 5</button>
            <button onClick={() => { dispatch({type: 'reset'}) }}>reset</button>
            <button onClick={() => { dispatch({type: 'increment2', value: 1}) }}>increment2 1</button>
            <button onClick={() => { dispatch({type: 'decrement2', value: 1}) }}>decrement2 1</button>
        </div>
    )
}
