import React,{ useState,useMemo } from 'react'

export const Memoo = () => {
    const [ firstCounter,setFirstCounter ] = useState(0);
    const [ secondCounter,setSecondCounter ] = useState(0);

    const incrementFirst = () => {
        setFirstCounter(firstCounter +1 );
    }
    const incrementSecond = () => {
        setSecondCounter(secondCounter +1 );
    }
    const isEven = useMemo(() => {
        let i =0;
        while(i<200000000) i++
        return firstCounter%2 ===0
    },[firstCounter] )

    return (
        <div>
            first - {firstCounter}
            <button onClick={incrementFirst} >
                First
            </button>
            <span>{isEven ? 'Even': 'odd'}</span>
            <br />
            second - {secondCounter}
            <button onClick={incrementSecond} >
                Second
            </button>
        </div>
    )
}

export default Memoo
