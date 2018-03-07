import React, { Component } from 'react';
export default class  DashboardPage extends Component {
    constructor(props) {
        super(props);

        document.title = 'Dashboard';
    }
   render (){

        return (
            <div className="empty">
                <div className="empty-icon">
                    <i className="icon icon-people"></i>
                </div>
                <p className="empty-title h5">Welcome to Firebase Client App</p>
                <p className="empty-subtitle">Click the button to start a conversation.</p>
                <div className="empty-action">
                    <button className="btn btn-primary">Send a message</button>
                </div>
            </div>
             
        )

   }

}