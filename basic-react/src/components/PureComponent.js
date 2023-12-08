import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure compo ");

        return (
            <div>
                PureComponent
                <p>{this.props.message}</p>
            </div>
        )
    }
}

// export default PureComponent
