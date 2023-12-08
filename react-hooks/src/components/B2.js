import React,{useContext} from 'react'
import { CountContext } from '../App';

export const B2 = () => {
    const counterContext = useContext(CountContext);
    return (
        <div>
            Component B2
            <button onClick={() => { counterContext.countDispatch('increment') }}>increment</button>
            <button onClick={() => { counterContext.countDispatch('decrement') }}>decrement</button>
            <button onClick={() => { counterContext.countDispatch('reset') }}>reset</button>
        </div>
    )
}
