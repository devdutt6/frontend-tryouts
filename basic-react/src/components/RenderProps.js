import React, { Component } from 'react'

export class RenderProps extends Component {
    render() {
        return (
            <div>
                {this.props.render(false)}
            </div>
        )
    }
}

export default RenderProps
