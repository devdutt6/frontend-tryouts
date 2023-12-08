import React from 'react'
const {useState} = require('react')

export const ObjectHook = () => {
    const [name , setName] = useState({firstName: '',lastName: ''});

    return (
        <div>
            <input
            type='text'
            value={name.firstName}
            onChange={e => setName({...name ,firstName: e.target.value })} />
            <input
            type='text'
            value={name.lastName}
            onChange={e => setName( {...name ,lastName: e.target.value })} />

            <p>firstName is {name.firstName}</p>
            <p>lastName is {name.lastName}</p>
            <h3>{name.firstName} {name.lastName}</h3>
        </div>
    )
}

// export default ObjectHook
