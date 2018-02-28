import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
        <header className="navbar">
            <section className="navbar-section">
                <a href="#" className="navbar-brand mr-2">Sample Firebase App</a>
                <a href="#" className="btn btn-link">Docs</a>
                <a href="https://github.com/weareinfinite/firebase-functions-rest-api" className="btn btn-link">GitHub</a>
                <a href="#login">Login</a>
            </section>
        </header>
        );
    }
}