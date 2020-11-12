import React from "react";
import HomeButton from "../HomeButton/HomeButton";
import "./HomePageContainer.css";
import SiteTitle from "../SiteTitle/SiteTitle";

const HomePageContainer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
        <SiteTitle />
        </div>
      </div>
      <div className="card" id="home-container">
        <div className="card-body">
          <div className="row mb-4">
            <div className="col-md-12">
              <p className="card-text home-card-text">
                Welcome to Link Dyscovery! This application is a place for
                adults living with learning disabilities to find, rate, and
                share resources in a convenient and safe place with other like
                minded adults. To get started, select the “Create an Account”
                button. Don’t want to create an account? That’s ok! You won’t
                have full access to all the resources but you can still view the
                verified resources page. By creating an account you will have
                the ability to rate and share resources with the community as
                well as have access to the community shared resources.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row justify-content-center">
                <HomeButton title="View Resources" link="/resource-category" />

                <HomeButton title="Login" link="/login" />

                <HomeButton title="Create an Account" link="/create-account" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageContainer;
