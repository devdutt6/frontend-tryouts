import React, { Component } from 'react'
import {UpgradeComponent} from './HigherOrder'

class ClickCounter extends Component {
    render() {
        const { count,handle } = this.props

        return (
            <div>
                <button onClick={handle}>Clicked {count} times</button>
            </div>
        )
    }
}

export default UpgradeComponent(ClickCounter)

