import React, { Component } from 'react';
export default class  DashboardPage extends Component {
    constructor(props) {
        super(props);

        document.title = 'Dashboard';
    }
   render (){

        return (
            <div>
            

                <div className="container">
                    <h2>Dashboard </h2>
                    <div className="columns">
                        <div className="column col-4">
                            <a className="btn btn-primary btn-tile">Leads</a>
                        </div>
                        <div className="column col-4">
                            <a className="btn btn-success btn-tile">Contacts</a>
                        </div>
                        <div className="column col-4">
                            <a className="btn btn-error btn-tile">Settings</a>
                        </div>
                    </div>
                </div>
            </div>
            
             
        )

   }

}