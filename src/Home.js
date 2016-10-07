import React, { Component } from 'react';
import {Link} from 'react-router';

import logo from './assets/img/logo.png';
import drinks from './assets/img/drinks.png';
import fruits from './assets/img/fruits.png';
import contact from './assets/img/mail.svg';
import blog from './assets/img/notes.svg';
import picture from './assets/img/picture.svg';
import './Home.scss';


class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="wrapper flex">
                    <div className="flex">
                        <Link to="/posts"><img src={blog} alt="" className="blog"/></Link>
                        <a href="#"><img src={drinks} alt="" className="drinks"/></a>

                    </div>
                    <div className="flex">
                        <a href="#"><img src={logo} alt="" className="logo"/></a>
                        <a href="#"><img src={contact} alt="" className="contact"/></a>
                    </div>
                    <div className="flex">
                        <a href="#"><img src={picture} alt="" className="picture"/></a>
                        <a href="#"><img src={fruits} alt="" className="fruits"/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
