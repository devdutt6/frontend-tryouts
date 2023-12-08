import React from "react";

export const Child = (props) => {
    return (
        <div>
            <button onClick = {() => props.greetHandle('Child')}>Click</button>
        </div>
    )
}