import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader  from 'react-loaders';
import { loginWithEmailPassword } from '../../api';
class  LoginPage extends Component {

    constructor(props) {

        super(props)

        this.state = {
            email: '',
            password: '',
            isLoading: false,
            errors: null
        }

        this.inputChange = this.inputChange.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);

        document.title = 'Login';

    }

    inputChange(e) {

        this.setState({[e.target.name]: e.target.value })
    }

    onSubmitHandler(e) {
        this.setState({ isLoading: true})
        let { email, password } = this.state;
        e.preventDefault();


        loginWithEmailPassword(email, password)
            .then((res) => {
                this.setState({ isLoading: false})
                console.log(res)
                this.props.history.push('/dashboard');
            })
            .catch(err => {
                this.setState({ isLoading: true})
                console.log(err.message)
                // TODO: Handle Error Message 
                
            })
    }

    render() {
        const { user } = this.props;
        if(user) return (<Redirect to="/dashboard"></Redirect>)
        return(
           <div className="container login-form-container">
        <form onSubmit={ this.onSubmitHandler }>
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
            <button className="btn btn-primary">LOGIN</button>
        </div>
        </form>
    </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, null)(LoginPage);
