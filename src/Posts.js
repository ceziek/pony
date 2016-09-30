import React, {Component} from 'react';
import $ from 'jquery';

import './Posts.scss';

class Posts extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        $.get('http://192.168.8.102:3000/posts', (posts) => {
            this.setState({
                posts: posts
            });
        })
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
            <div className="Posts flex">
                <input type="text"/>
                {posts}
            </div>
        );
    }
}

export default Posts;
