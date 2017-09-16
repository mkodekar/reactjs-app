import React from 'react';
import {Header} from './Header.jsx';

export class Root extends React.Component {
    render() {
        return(
            <div className="container">
                {/* <div className="row">
                    <div className="col-xs-15 col-xs-offset-1">
                        <Header />
                    </div>
                </div> */}
                <div className="row">
                    <div className="col-xs-15 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        ); 
    }
}




























































