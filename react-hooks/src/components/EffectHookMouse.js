import React ,{useState,useEffect}from 'react'

export const EffectHookMouse = () => {
    const [display ,setDisplay] = useState(true);
    const [x ,setX] = useState(0);
    const [y ,setY] = useState(0);

    const mouseLogger = (e) => {
        console.log("mousemove")
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        console.log("Use Effect")
        window.addEventListener('mousemove' , mouseLogger)

        return () => {
            console.log("Unmounting display")
            window.removeEventListener('mousemove', mouseLogger)
        }
    },[])


    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle</button>
            {display ? `Hook X-${x} Y-${y}` : undefined}
        </div>
    )
}
