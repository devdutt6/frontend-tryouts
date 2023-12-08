import React from "react";
import {Component} from "react";

export const UpgradeComponent = (Ori) => {
    class HigherOrder extends Component {
        constructor(props) {
            super(props)

            this.state = {
                count:0
            }
        }
        handle = () => {
            this.setState( prevState => {
                return {count: prevState.count + 1};
            })
        }

        render() {
            return (
               <Ori count={this.state.count} handle={this.handle}/>
            )
        }
    }
    return HigherOrder
}