import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Loader  from 'react-loaders';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';

import firebaseapp from './firebaseapp'
import store from './store';

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state =  {auth_changed: false};
    }
    componentWillMount() {
        
        firebaseapp.auth().onAuthStateChanged(authUser => {
            console.log('onAuthStateChange::', authUser);
            store.dispatch({type: 'USER_AUTHENTICATED', payload: authUser});
            this.setState({auth_changed: true});
        })
    }

    render() {
        const { auth_changed } = this.state;

        if(!auth_changed) return(
            <div className="app-laoding">
                <Loader type="pacman" active></Loader>
            </div>
            );
        return(
            <Router>
            <div id="wrapper" className="container">
                <Header/>
                <main>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/login" component={ LoginPage } />
                    <Route exact path="/dashboard" component={ DashboardPage } />
                </main>
            </div>
            </Router>
        )
    }
}