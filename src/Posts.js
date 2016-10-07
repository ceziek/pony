import React, {Component} from 'react';
import $ from 'jquery';
import {Link} from 'react-router';

import './Posts.scss';

class Posts extends Component {
    constructor() {
        super();

        this.keys = {
            posts: 'posts.list',
            time: 'posts.time'
        };

        this.state = {
            posts: []
        };
    }

    componentDidMount() {

        // check if there are posts already

        let cached = window.localStorage.getItem(this.keys.posts);

        if (cached) {
            cached = JSON.parse(cached);

            if (cached.length) {
                this.setState({
                    posts: cached
                });
            }
        }

        let timeSinceLastUpdate = Date.now() - this.getListTime();


        if (timeSinceLastUpdate > 12000) {
            $.get('http://localhost:3001/posts', (posts) => {
                this.saveList(posts);
                this.setState({
                    posts: posts
                });
            }).fail((error) => console.log(error , "user"));
        }
    }

    getListTime() {
        return Number(window.localStorage.getItem(this.keys.time));
    }

    touchList() {
        window.localStorage.setItem(this.keys.time, Date.now());
        
    }
    
    saveList(list = this.state.posts) {
        window.localStorage.setItem(this.keys.posts, JSON.stringify(list));
        this.touchList();
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
