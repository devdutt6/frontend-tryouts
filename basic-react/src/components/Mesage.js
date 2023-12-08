import React , { Component } from "react";

export class MyClass extends Component{
    constructor(){
        super()
        this.state = {
            message: 'Click Below to change me!'
        }
    }

    changeState(){
        this.setState({
            message: 'Thanks man!'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeState()}>Click me</button>
            </div>
        )
    }
}