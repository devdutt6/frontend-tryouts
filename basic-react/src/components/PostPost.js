import React, { Component } from 'react'
import axios from 'axios'

class PostPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
             UserId: '',
             Title: '',
             Body: ''
        }
    }

    changeHandle = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    submitHandle = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => console.log(response.data))
    }

    render() {
        const { UserId ,Title ,Body } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                    <div>
                        <input
                        type="text"
                        name="UserId"
                        onChange={this.changeHandle}
                        value={UserId} />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="Title"
                        onChange={this.changeHandle}
                        value={Title} />
                    </div>
                    <div>
                        <input
                        type="text"
                        name="Body"
                        onChange={this.changeHandle}
                        value={Body} />
                    </div>
                    <button type="submit" value="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostPost
