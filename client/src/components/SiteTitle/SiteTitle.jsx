import React from "react";
import MainLogo from "../../images/443x100.png";

const SiteTitle = () => {
  return (
    <div>
      <div className="row home-row align-items-center">
          <div className="col">
          <img id="main-img" src={MainLogo} />
          </div>
          <div className="col align-self-center">
          <p id="home-title-tag">Communicating Differently Together</p>
          </div>
      </div>
    </div>
  );
};

export default SiteTitle;
