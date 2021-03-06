import React, {Component} from 'react';
import {Router, Route, browserHistory} from 'react-router';
import Posts from './Posts';
import Home from './Home';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={browserHistory}>
                    <Route path="/" component={Home}/>
                    <Route path="posts" component={Posts}/>
                </Router>

            </div>
        );

    }
}

export default App;
