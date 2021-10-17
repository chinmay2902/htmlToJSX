import React  from 'react'
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function Navbar(props) {
    
    return (
        <div>
           

          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="navbar">
              
            <Link className="navbar-brand mx-2" to="/">{props.title}</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>

                </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">SignUp</Link>
                    </li>
                </ul>
                
            </div>
        
            <div className={`form-check form-switch text-${props.mode==="light"?"dark":"light"} me-3`}>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Mode</label>
                </div>
           
                
        </nav>  
           
        </div>
    )
}

Navbar.prototype={
    title: PropTypes.string,
}
