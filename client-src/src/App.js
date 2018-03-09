import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';

import firebaseapp from './firebaseapp'
import store from './store';

export default class App extends Component {

    componentWillMount() {
        //TODO: Add user data to redux state
        firebaseapp.auth().onAuthStateChanged(authUser => {
            console.log('onAuthStateChange::', authUser);
            store.dispatch({type: 'AUTH_USER', payload: authUser});
        })
    }

    render() {
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