import React ,{Component}from "react"

export class Form extends Component{
    constructor(){
        super()
        this.state={
            fname:'',
            lname:'',
            age:'21'
        }
    }

    handlefname = (event) => {
        this.setState({
            fname: event.target.value
        })
    }
    handlelname = (event) => {
        this.setState({
            lname: event.target.value
        })
    }
    handleselect = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    handlesubmit = (event) => {
        event.preventDefault();
        alert(`${this.state.fname} ${this.state.lname} ${this.state.age}`)
    }
    render(){
        return (
            <form onSubmit={this.handlesubmit}>
                <div>
                    <label>First Name</label>
                    <input type="text" value={this.state.fname} onChange={this.handlefname} />
                </div>
                <div>
                    <label>Last Name</label>
                    <textarea value={this.state.lname} onChange={this.handlelname} />
                </div>
                <div>
                    <label>Age</label>
                    <select value={this.state.age} onChange={this.handleselect}>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}