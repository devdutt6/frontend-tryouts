import React , {Component} from "react";

export class Blind extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: "Hello"
        }
        // 3. this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
        this.setState({
            message: "Good Bye!"
        })
        // console.log(this)
    }

    render(){
        return (
            <div>
                <p>{this.state.message}</p>
                {/* 1. <button onClick={this.handleClick.bind(this)}>Click</button> */}
                {/* 2. <button onClick={() => this.handleClick()}>Click</button> */}
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}