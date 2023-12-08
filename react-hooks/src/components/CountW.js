import React from 'react'

function CountW({text,count}) {
    console.log(`Rendering ${text}`)
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(CountW)
