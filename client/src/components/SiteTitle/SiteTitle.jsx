import React from "react";
import MainLogo from "../../images/443x100.png";
import './SiteTitle.css';

const SiteTitle = () => {
  return (
    <div>
      <div className="row">
      <div class="d-flex justify-content-center">
        <div className="col">
          <img id="main-img" src={MainLogo} />
        </div>

        <div className="col align-self-end">
          <p id="home-title-tag">Communicating Differently Together</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default SiteTitle;
