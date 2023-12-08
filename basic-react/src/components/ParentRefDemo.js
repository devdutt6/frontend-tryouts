import React, { Component } from 'react'
import { ChildRefDemo } from './ChilsRefDemo'

export class ParentRefDemo extends Component {
    constructor(props) {
        super(props)
        this.ParentRef = React.createRef();
    }

    handleClick = () => {
        this.ParentRef.current.inputFocus();
    }

    render() {
        return (
            <div>
                <ChildRefDemo typ="text" ref={this.ParentRef} />
                <button onClick={this.handleClick}>Focus</button>
            </div>
        )
    }
}

// export default ParentRefDemo
