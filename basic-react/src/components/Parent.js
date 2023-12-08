import React , {Component } from "react";
import {Child} from './Child'

export class Parent extends Component{
    constructor(){
        super()
        this.state = {
            message: "Parent"
        }
        this.greet = this.greet.bind(this)
    }

    greet(node){
        alert(`Hello ${this.state.message} from ${node}`)
    }
    render(){
        return(<div>
            <Child greetHandle={this.greet}/>
        </div>)
    }
}