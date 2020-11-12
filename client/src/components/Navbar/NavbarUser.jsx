import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/250x57.png";

import "./Navbar.css";

const NavbarUser = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-custom">
      <Link to="/user-home" className="nav-bar-link">
        <img src={Logo} alt="Link Dyscovery" />
      </Link>

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
            <Link to="/verified-resources-auth" className="nav-bar-link">
              Resources
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile/:id" className="nav-bar-link">
              Profile
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/auth-resource-category" className="nav-bar-link">
              Categories
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user-resources" className="nav-bar-link">
              Resources from Users
            </Link>
            </li>
            {/* <li className="nav-item">
            <Link to="/login" className="nav-bar-link">
              Login
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavbarUser;