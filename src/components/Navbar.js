import React  from 'react'
import PropTypes from 'prop-types';


export default function Navbar(props) {
    
    return (
        <div>
           

          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="navbar">
              
            <a className="navbar-brand mx-2" href="#">{props.title}</a>
            
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    {/* <li className="nav-item active">
                        <Link className="nav-link" to="/about">About</Link>
                    </li> */}

                </ul>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link" href="#">SignUp</a>
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
