import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
        <header className="navbar">
            <section className="navbar-section">
                <Link className="navbar-brand mr-2" to="/">Sample Firebase App</Link>
                <Link className="btn btn-link" to="/">Home</Link>
                <Link className="btn btn-link" to="/login">Login</Link>
                <a href="https://github.com/weareinfinite/firebase-functions-rest-api" className="btn btn-link">GitHub</a>
            </section>
        </header>
        );
    }
}