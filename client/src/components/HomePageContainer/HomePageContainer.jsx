import React from "react";
import MainLogo from "../../images/443x100.png";
import HomeButton from "../HomeButton/HomeButton";
import './HomePageContainer.css';

const HomePageContainer = () => {
  return (
    <div className="container">
        <div className="row home-row align-items-center">
          <img id="main-img" src={MainLogo} />
          <p>Communicating Differently Together</p>
        </div>

        <div className="card" id="home-container">
          <div className="card-body">
            <p className="card-text home-card-text">
              Welcome to Link Dyscovery! This application is a place for adults
              living with learning disabilities to find, rate, and share
              resources in a convenient and safe place with other like minded
              adults. To get started, select the “Create an Account” button.
              Don’t want to create an account? That’s ok! You won’t have full
              access to all the resources but you can still view the verified
              resources page. By creating an account you will have the ability
              to rate and share resources with the community as well as have
              access to the community shared resources.
            </p>
            <div className="row justify-content-md-center">
              <HomeButton 
                title="Login"
               
              />
              <HomeButton
                title="Login"
              
              />
              <HomeButton 
                title="Create an Account"
                
              />
            </div>

          </div>
      </div>
    </div>
  );
};

export default HomePageContainer;
