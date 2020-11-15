import React from "react";
import MainLogo from "../../images/443x100.png";
import './SiteTitle.css';

const SiteTitle = () => {
  return (
      <div className="row d-md-flex">
        <div className="col-md-6">
          <img id="main-img" src={MainLogo} alt="Link Dyscovery Logo" />
        </div>
        <div className="col-md-6 align-self-md-end ml-3 mt-3 ml-sm-0 mt-sm-0">
          <p id="home-title-tag">Communicating Differently Together</p>
        </div>
      </div>
  );
};

export default SiteTitle;
