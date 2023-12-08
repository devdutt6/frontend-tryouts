import React,{useState,useEffect} from 'react'
import axios from 'axios';


export const HookFetch = () => {
    const [post ,setPost] = useState({});
    const [id ,setId] = useState(1);
    const [idfrominput ,setIdfrominput] = useState(1);

    const handleClick = () => {
        setIdfrominput(id);
    }
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrominput}`)
        .then(res => {
            console.log(res.data)
            setPost(res.data)
        })
        .catch(err => {
            console.error(err);
        })
    },[idfrominput])

    return (
        <div>
            {/* <button onClick={() => setId(1)}>1</button>
            <button onClick={() => setId(2)}>2</button>
            <button onClick={() => setId(3)}>3</button>
            <button onClick={() => setId(4)}>4</button>
            <button onClick={() => setId(5)}>5</button> */}
            <input type="number" value={id} onChange={e => { setId(e.target.value) }} />
            <button onClick={handleClick}>Get</button>
            <ul>
                <li>{post.title}</li>
            </ul>
        </div>
    )
}
