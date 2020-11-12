import React from "react";
import MainLogo from "../../images/443x100.png";
import './SiteTitle.css';

const SiteTitle = () => {
  return (
      <div className="row d-md-flex">
        <div className="col-md-6">
          <img id="main-img" src={MainLogo} />
        </div>
        <div className="col-md-6 align-self-lg-end">
          <p id="home-title-tag">Communicating Differently Together</p>
        </div>
      </div>
  );
};

export default SiteTitle;
