import React, {  } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav () {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link class="nav-item active nav-link navbar-brand" to="/">
                <h3>Nk</h3>            
            </Link>
            <ul className="navbar-nav mr-auto">
                <Link class="nav-item active nav-link" to="/countries">
                    <li >Countries</li>
                </Link>
                <Link className="nav-item active nav-link" to="/about">
                    <li >About</li>
                </Link>
                
            </ul>
        </nav>
    )

}



export default Nav;