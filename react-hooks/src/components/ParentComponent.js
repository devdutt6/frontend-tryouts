import React,{ useState,useCallback } from 'react'
import CountW from './CountW'
import Button from './Button'
import Title from './Title'

export const ParentComponent = () => {
    const [age ,setAge] = useState(21);
    const [ salary ,setSalary ] = useState(10000)

    const incrementAge = useCallback(() => {
        setAge(age +1);
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary +10000);
    }, [salary])
    return (
        <div>
            <Title />
            <CountW text="Age" count={age} />
            <Button handleClick={incrementAge}> Increment Age</Button>
            <CountW text="Salary" count={salary} />
            <Button handleClick={incrementSalary} > Increment Salary</Button>
        </div>
    )
}
