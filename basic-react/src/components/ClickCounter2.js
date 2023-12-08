import React, { Component } from 'react'
import {UpgradeComponent} from './HigherOrder'

class ClickCounter2 extends Component {
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
                <button onClick={counterincrement}>Clicked {count} times</button>
            </div>
        )
    }
}

export default ClickCounter2
// export default UpgradeComponent(ClickCounter2)

