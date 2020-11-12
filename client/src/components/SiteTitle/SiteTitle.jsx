import React from "react";
import MainLogo from "../../images/443x100.png";
import './SiteTitle.css';

const SiteTitle = () => {
  return (
    <div>
      <div className="row">
      <div className="d-flex">
        <div className="col-md">
          <img id="main-img" src={MainLogo} />
        </div>

        <div className="col-md align-self-end">
          <p id="home-title-tag">Communicating Differently Together</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SiteTitle;
