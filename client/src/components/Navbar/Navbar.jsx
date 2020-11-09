import React from 'react';
import Logo from  '../../images/250x57.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-md navbar-custom">
          <img
            src={Logo} alt='Link Dyscovery'
          /> 
          <button
            className="navbar-light navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                 className="nav-bar-link"
                >
                  Resources
                </a>
              </li>
              <li className="nav-item">
                <a
                 className="nav-bar-link"
                >
                    Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      );
};

export default Navbar;