import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';

export default class App extends Component {


    render() {
        return(
            <Router>
            <div id="wrapper" className="container">
                <Header/>
                <main>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/login" component={ LoginPage } />
                </main>
            </div>
            </Router>
        )
    }
}