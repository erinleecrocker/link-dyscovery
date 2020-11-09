import React from "react";
import MainLogo from "../../images/443x100.png";
import './HomePageContainer.css';

const HomePageContainer = () => {
  return (
    <div className="container">
      <div className="card" id="intro-container">
        <div className="row heading-row">
            <img id="main-img" src={MainLogo}/>
        </div>
        <div className="card-body">
          
          <p className="card-text">
            Welcome to Link Dyscovery! This application is a place for adults
            living with learning disabilities to find, rate, and share resources
            in a convenient and safe place with other like minded adults. To get
            started, select the “Create an Account” button. Don’t want to create
            an account? That’s ok! You won’t have full access to all the
            resources but you can still view the verified resources page. By
            creating an account you will have the ability to rate and share
            resources with the community as well as have access to the community
            shared resources.
          </p>
          <div className="Row">
          <a href="#" className="btn btn-primary ml-3">
            Go somewhere
          </a>
          <a href="#" className="btn btn-primary ml-3">
            Go somewhere
          </a>
          <a href="#" className="btn btn-primary ml-3">
            Go somewhere
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default HomePageContainer;
