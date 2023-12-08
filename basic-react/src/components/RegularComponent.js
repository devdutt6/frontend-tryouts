import React, { Component } from 'react'

export class RegularComponent extends Component {
    render() {
        console.log("Regular compo ");

        return (
            <div>
                RegularComponent
                <p>{this.props.message}</p>
            </div>
        )
    }
}

// export default RegularComponent
