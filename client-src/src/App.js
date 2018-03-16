import React, { Component ,} from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Loader  from 'react-loaders';

import Footer from './components/footer/Footer';

import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import DashboardPage from './components/pages/DashboardPage';

import firebaseapp from './firebaseapp'
import store from './store';
import { clearTimeout } from 'timers';

export default class App extends Component {

    constructor(props) {
        super(props)

        this.state =  {auth_changed: false};

        this.timeOut = null;
    }
    componentWillMount() {
        
        firebaseapp.auth().onAuthStateChanged(authUser => {

            store.dispatch({type: 'USER_AUTHENTICATED', payload: authUser});
            // A Small time out
            this.timeOut = setTimeout(() => {  this.setState({auth_changed: true}) },1500);
        })
    }

    componentWillUnmount() {
        clearTimeout(this.timeOut);
    }

    loadingWrapper() {
            return (<div className="app-laoding">
                <Loader type="pacman" active></Loader>
            </div>)
    }

    render() {
        const { auth_changed } = this.state;
        return(
            <Router>
            <div id="wrapper" className="container">
                { !auth_changed && this.loadingWrapper() }
                { auth_changed && <React.Fragment> <Header/>
                <main>
                    <Route exact path="/" component={ HomePage } />
                    <Route exact path="/login" component={ LoginPage } />
                    <Route exact path="/dashboard" component={ DashboardPage } />
                </main> 
                <Footer></Footer>
                </React.Fragment>}
            </div>
            </Router>
        )
    }
}