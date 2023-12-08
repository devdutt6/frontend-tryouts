import React, { Component } from 'react'
import {UpgradeComponent} from './HigherOrder'

class HoverCounter2 extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //          count: 0
    //     }
    // }
    // handle = () => {
    //     this.setState( (prevState) => {
    //         return {count : prevState.count + 1}
    //     })
    // }
    render() {
        // const { count } = this.state
        const { count,counterincrement } = this.props

        return (
            <div>
                <h2 onMouseOver={counterincrement}>Hovered {count} times</h2>
            </div>
        )
    }
}

export default HoverCounter2
// export default UpgradeComponent(HoverCounter2)

