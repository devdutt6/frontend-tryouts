import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

export class ComponentB extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (name) => {return <div>Hello {name}</div>}
                }
            </UserConsumer>
        )
    }
}

export default ComponentB
