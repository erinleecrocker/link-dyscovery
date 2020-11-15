import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/250x57.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-md navbar-custom">
      <Link to="/home" className="nav-bar-link">
        <img src={Logo} alt="Link Dyscovery" id="nav-img" />
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
          <li className="nav-item dot">
            <Link to="/verified-resources" className="nav-bar-link">
              Resources
            </Link>
          </li>
          <li className="nav-item dot">
            <Link to="/login" className="nav-bar-link">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
