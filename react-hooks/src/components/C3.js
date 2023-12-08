import React,{useContext} from 'react'
import { CountContext } from '../App';


export const C3 = () => {
    const counterContext = useContext(CountContext);
    return (
        <div>
            Component C3
            <button onClick={() => { counterContext.countDispatch('increment') }}>increment</button>
            <button onClick={() => { counterContext.countDispatch('decrement') }}>decrement</button>
            <button onClick={() => { counterContext.countDispatch('reset') }}>reset</button>
        </div>
    )
}
