import React,{useContext} from 'react'
import { UserContext,ChannelContext } from '../App'

// const { ComponentD } = require('./ComponentD')
export const ComponentC = () => {

    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            {/* <ComponentD /> */}
            {user}-{channel}
        </div>
    )
}
