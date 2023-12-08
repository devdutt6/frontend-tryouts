import React ,{Component} from 'react';
import { LifeCycleB } from './LifecycleB.js'

export class LifeCycleA extends Component{
    constructor(){
        super()
        this.state={
            message: "hello"
        }
        this.changehah = this.changehah.bind(this)
        console.log('LifeCycleA Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return true;
    }
    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log('LifeCycleA shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return true;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('LifeCycleA componentDidUpdate')
        return true;
    }
    changehah = (event ) => {
        event.preventDefault();
        this.setState({
            message: "Bye"
        })
    }

    render(){
        console.log('LifeCycleA render')
        return (<div>
            <LifeCycleB />
            <p>{this.state.message}</p>
            <button onClick={this.changehah}>Click</button>
            </div>);

    }
}