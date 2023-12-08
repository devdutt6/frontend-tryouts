import React ,{Component} from 'react';

export class LifeCycleB extends Component{
    constructor(){
        super()
        this.state={
            message: "hello"
        }
        console.log('LifeCycleB Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return 1;
    }
    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    shouldComponentUpdate(nextprops,nextstate){
        console.log('LifeCycleB shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return true;
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('LifeCycleB componentDidUpdate')
        return true;
    }

    render(){
        console.log('LifeCycleB render')
        return (<div><p>Hello</p></div>);
    }
}