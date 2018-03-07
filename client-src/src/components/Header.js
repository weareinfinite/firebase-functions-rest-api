import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <header className="navbar">
            <section className="navbar-section">
                <NavLink exact activeClassName="active" className="navbar-brand mr-2" to="/">Sample Firebase App</NavLink>
                <NavLink exact activeClassName="active" className="btn btn-link" to="/">Home</NavLink>
                <NavLink exact activeClassName="active" className="btn btn-link" to="/login">Login</NavLink>
                <a href="https://github.com/weareinfinite/firebase-functions-rest-api" className="btn btn-link">GitHub</a>
            </section>
        </header>
        );
    }
}