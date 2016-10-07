import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

import './Posts.scss';

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        $.get('http://localhost:3001/posts', (posts) => {
            this.setState({
                posts: posts
            });
        }).fail((error) => console.log(error , "user"));
    }

    render() {
        let posts = this.state.posts.map((post, key) => {
            return (
                <div className="Post" key={key}>
                    <article>
                        <h2>{post.title}</h2>
                        <p>{post.text}</p>
                    </article>
                </div>
            )
        });
        console.log(posts);
        return (
            <div className="Posts">
                <div className="wrapper flex">
                    <Link to="/">Back</Link>
                    {posts}
                </div>
            </div>
        );
    }
}

export default Posts;
