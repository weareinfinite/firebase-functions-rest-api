import React, { Component } from 'react';
import { Route, Redirect , withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const AuthGaurd =  ({ component: Component, ...rest }) => {
    
    if(rest.user !== null ){
        
        return(<Route {...rest} render = { (props) => {
            return (<Component {...props} />)
        }}/>)
    }
    else {

        return (<Redirect to={{pathname: 'login'}}/>)
    }
    
    
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default withRouter(connect(mapStateToProps, null)(AuthGaurd));