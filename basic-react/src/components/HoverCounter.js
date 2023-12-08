import React, { Component } from 'react'
import {UpgradeComponent} from './HigherOrder'

export class HoverCounter extends Component {
    render() {
        const { count,handle } = this.props
        return (
            <div>
                <h2 onMouseOver={handle}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default UpgradeComponent(HoverCounter);