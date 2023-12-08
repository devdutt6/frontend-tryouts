import React, { Component } from 'react'
import { ForwardRef } from './ForwardRef';

export class ParentForwardRef extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
    }

    handleClick = () => {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <ForwardRef ref={this.inputRef} />
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}

// export default ParentForwardRef
