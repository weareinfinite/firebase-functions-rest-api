import React, { Component } from 'react';

export default class  LoginPage extends Component {

    constructor(props) {

        super(props)

        this.state = {
            email: 'sarath@gmail.com',
            password: 'somepass',
            errors: null
        }

        this.inputChange = this.inputChange.bind(this);

        document.title = 'Login';

    }

    inputChange(e) {

        this.setState({[e.target.name]: e.target.value })
    }

    render() {
        return(
           <div className="container login-form-container">
        <form>
        <h2>Login</h2>
        <div className="form-group has-success">
            <label className="form-label" htmlFor="input-example-1">Email</label>
            <input className="form-input" type="text" name="email" onChange={ this.inputChange } value={ this.state.email } placeholder="Email" />
            <p className="form-input-hint">The email is invalid.</p>
        </div>
        <div className="form-group">
            <label className="form-label" htmlFor="input-example-1">Password</label>
            <input className="form-input is-success" type="password" name="password" onChange={ this.inputChange } value={ this.state.password }  placeholder="Password"/>
            <p className="form-input-hint">The password is invalid.</p>
        </div>

       
        <div className="form-group">
            <label className="form-checkbox is-error">
            <input type="checkbox" />
            <i className="form-icon"></i> Remember me
            </label>
        </div>
        <div className="form-group">
            <button className="btn btn-primary">LOGIN</button>
        </div>
        </form>
    </div> 
        )
    }
}
    
