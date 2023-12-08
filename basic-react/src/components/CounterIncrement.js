import React, { Component } from 'react'

class CounterIncrement extends Component {
    constructor(props) {
        super(props)

        this.state = {
             count: 0
        }
    }
    counterincrement = () => {
        this.setState( (prevState) => {
            return {count : prevState.count + 1}
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.counterincrement)}
            </div>
        )
    }
}

export default CounterIncrement
