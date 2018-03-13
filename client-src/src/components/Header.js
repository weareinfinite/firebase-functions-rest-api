import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        const { user } = this.props;
        return (
        <header className="navbar">
            <section className="navbar-section">
                <NavLink exact  className="navbar-brand mr-2" to="/">Sample Firebase App</NavLink>
                <NavLink exact activeClassName="active" className="btn btn-link" to="/">Home</NavLink>
            { !user && <NavLink exact activeClassName="active" className="btn btn-link" to="/login">Login</NavLink> }
            { user && <NavLink exact activeClassName="active" className="btn btn-link" to="/dashboard">Dashboard</NavLink> }
                <a href="https://github.com/weareinfinite/firebase-functions-rest-api" className="btn btn-link">GitHub</a>
            </section>
        </header>
        );
    }
}

function mapStateToProps(state) {

    return {
        user: state.user
    }

}

export default connect(mapStateToProps, null)(Header);