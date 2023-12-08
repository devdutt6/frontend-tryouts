import React from 'react'
const { useState } = require('react');

export const  HookCounter = () => {

    const [count,setCount] = useState(0)

    return (
        <div>
            <button onClick={() => { setCount(count +1) }}>Click {count}</button>
        </div>
    )
}

// export default HookCounter
