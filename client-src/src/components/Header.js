import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink , withRouter } from 'react-router-dom';
import { logout } from '../api'


class Header extends Component {

    constructor(props) {
        super(props);

        this.doLogout = this.doLogout.bind(this);
    }

    doLogout() {
        logout().then(() => {
            this.props.history.push('/');
        })
    }
    render() {
        const { user } = this.props;
        return (
        <header className="navbar">
            <section className="navbar-section">
                <NavLink exact  className="navbar-brand mr-2" to="/">Sample Firebase App</NavLink>
                <NavLink exact activeClassName="active" className="btn btn-link" to="/">Home</NavLink>
            { !user && <NavLink exact activeClassName="active" className="btn btn-link" to="/login">Login</NavLink> }
            { user && <NavLink exact activeClassName="active" className="btn btn-link" to="/dashboard">Dashboard</NavLink> }
            { user && <button  className="btn btn-link" onClick={ this.doLogout }>Logout</button> }
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

export default withRouter(connect(mapStateToProps, null)(Header));