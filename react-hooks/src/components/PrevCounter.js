import React from 'react'
const {useState} = require('react');

export const PrevCounter = () => {
    let initial = 0;
    const [count,setCount] = useState(initial)


    return (
        <div>
            Count: {count}
            {/* not safe */}
            {/* <button onClick={() => {setCount(initial)}}>Reset</button>
            <button onClick={() => {setCount(count + 1)}}>Inc</button>
            <button onClick={() => {setCount(count - 1)}}>Dec</button> */}
            <button onClick={() => {setCount(initial)}}>Reset</button>
            <button onClick={() => {setCount(prevCount => prevCount + 1)}}>Inc</button>
            <button onClick={() => {setCount(prevCount => prevCount - 1)}}>Dec</button>

        </div>
    )
}

// export default PrevCounter
// Count: {count}