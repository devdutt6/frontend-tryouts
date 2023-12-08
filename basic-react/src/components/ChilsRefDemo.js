import React, { Component } from 'react'

export class ChildRefDemo extends Component {
    constructor(props) {
        super(props)
        this.ChildRef = React.createRef();
    }

    inputFocus = () => {
        this.ChildRef.current.focus();
    }

    render() {
        return (
            <div>
                <input ref={this.ChildRef} />
            </div>
        )
    }
}

// export default ChildRefDemo
