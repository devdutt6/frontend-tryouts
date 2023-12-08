import React, { PureComponent } from 'react'
const { PureComp } =require('./PureComponent')
const { RegularComponent} =require('./RegularComponent')

export class ParentPureComponent extends PureComponent {
    constructor(){
        super()
        this.state= {
            message: "Haha"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                message: "Haha"
            })
        }, 2000);
    }

    render() {
        console.log("----------------Parent compo ----------------");
        return (
            <div>
                ParentPureComponent
               <RegularComponent message={this.state.message} />
               <PureComp message={this.state.message} />
            </div>
        )
    }
}

// export default ParentPureComponent
