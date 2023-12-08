import React ,{Component} from 'react';
import {ArrayMapped} from './ArrayMapped'
export const NameList = () => {
    // const array = ['dev','chirayu','badrik'];
    const array = [
        {
            name:"dev",
            age: 22
        },
        {
            name:"Chirayu",
            age: 16
        },
        {
            name:"Badrik",
            age: 22
        }
    ]
    const ArryaMap = array.map(name => <ArrayMapped key={name.name} ah={name} />)
    return (
        <div>
            {ArryaMap}
        </div>
    )
}