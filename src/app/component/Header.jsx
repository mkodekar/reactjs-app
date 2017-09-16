import React from 'react';
import {Link} from 'react-router-dom';

export const Header = (props) => {
        return(
        <nav className="nav navbar-inverse">
            <div className="container container-fluid">
                <div className="col-md-3">
                    <a className="nav navbar-brand">WebSite Name</a>
                    <ul className="nav navbar-stacked">
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="user"> User</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};