import React from 'react'
import { ChannelContext, UserContext } from '../App'

export const ComponentE = () => {
    return (
        <div>
            <UserContext.Consumer>{
                user => {
                    return (
                    <ChannelContext.Consumer>
                        {
                            channel => {
                                return (
                                    <div>ComponentE User is {user}, watching channel {channel}</div>
                                )
                            }
                        }
                    </ChannelContext.Consumer>
                    )
                }
            }</UserContext.Consumer>
        </div>
    )
}
