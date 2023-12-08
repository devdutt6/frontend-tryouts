import React, { Component } from 'react'

export class ErrorBoundry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }

    render() {
        if(this.state.hasError){
            return (<div>
                Something went Wrong
            </div>)
        }else{
            return (<div>
                {this.props.children}
            </div>)
        }
    }
}

// export default ErrorBoundry
