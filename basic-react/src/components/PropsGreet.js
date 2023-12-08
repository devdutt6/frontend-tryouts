const React = require('react');
const  { Component } = require('react');

export const PropsGreet = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export class PropsHello extends Component {
    render() {
        return (
            <div>
                <h1>Hello, {this.props.age} a.k.a {this.props.username}</h1>
                {this.props.children}
            </div>
        )
    }
}