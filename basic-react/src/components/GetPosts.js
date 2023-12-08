import React, { Component } from 'react'
const axios = require('axios');

export class GetPosts extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ""
        }
    }

    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then( response => {
            console.log(response)
            this.setState({
                posts : response.data
            })
        })
        .catch(error => {
            this.setState({
                error: error
            })
        })
    }

    render() {
        const { posts, error } = this.state;
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) : null
                }
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

// export default GetPosts
