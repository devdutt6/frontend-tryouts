import React,{useState} from 'react'

export const ArrayHook = () => {

    const [items , setItems] = useState([]);

    const addItems = () => {
        setItems([...items,{
            id: items.length,
            value: Math.floor(Math.random()*10 + 1)
        }])
    }
    return (
        <div>
            <button onClick={addItems}>Random</button>
            <ul>
                {items.map(item => (
                    <li id={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default ArrayHook
