import React , { Component }from 'react';


export class Condition extends Component {
    constructor(){
        super()
        this.state = {
            isLoggedin : true
        }
    }
    render(){
        // 1. if(this.state.isLoggedin){
        // 1. return (<div><p>Hello Devdutt</p></div>)}
        // 1. else{
        // 1. return (<div><p>Hello Guest</p></div>)}
        // 2. let message
        // 2. if(this.state.isLoggedin){
        // 2. message = <p>Hello Devdutt</p>}
        // 2. else{
        // 2. message = <p>Hello Guest</p>}

        // 2. return (<div>{message}</div>)
        // 3. return this.state.isLoggedin ? (
        // 3.     <div><p>Hello Guest</p></div>
        // 3. ):(
        // 3.     <div><p>Hello Devdutt</p></div>
        // 3. )
        return this.state.isLoggedin && <div>Hello Devdutt</div>
    }
}