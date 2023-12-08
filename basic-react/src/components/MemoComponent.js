import React from 'react'

function MemoComponent(props) {
    console.log("MemoComponent");
    return (
        <div>
            Memo component
            <p>{props.name}</p>
        </div>
    )
}

export default React.memo(MemoComponent);
