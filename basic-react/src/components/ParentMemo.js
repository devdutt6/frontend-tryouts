import React, { Component } from 'react'
import MemoComponent from './MemoComponent';

export class ParentMemo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "nando mo"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: "nando mo"
            })
        }, 2000);
    }

    render() {
        console.log("-----------------Parent Memo--------------");
        return (
            <div>
                <MemoComponent name={this.state.name}/>
            </div>
        )
    }
}

export default ParentMemo
