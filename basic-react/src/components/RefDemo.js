import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)

        this.inputRefs = React.createRef();
        this.cbRefs = null;
        this.setcbRefs = element => {
            this.cbRefs = element
        }
    }

    componentDidMount(){
        if(this.cbRefs){
            this.cbRefs.focus();
        }
        // this.inputRefs.current.focus();
        // console.log(this.inputRefs)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRefs}/>
                <input type="text" ref={this.setcbRefs}/>
            </div>
        )
    }
}

// export default RefDemo
