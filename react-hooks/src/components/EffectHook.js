import React,{useState,useEffect} from 'react'

export const EffectHook = () => {

    const [count , setCount] = useState(0);

    useEffect(() => {
        document.title = `clicked ${count} times`
    })

    return (
        <div>
            <button onClick={() => {
                setCount((prevCount) => prevCount+1)
            }}>Click {count}</button>
        </div>
    )
}

// export default EffectHook
