import React from "react";
import ProfileChanges from "../ProfileChanges/ProfileChanges";
import ProfilePlaceholder from "../../images/profilePlaceholder.png";

import "./ProfileBody.css";

const ProfileBody = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body defaultStyle">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      id="profilePic"
                      src={ProfilePlaceholder}
                      alt="placeholder"
                    />
                  </div>
                </div>
                <div className="row ml-2 mb-4">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12 input-labels-bold">
                        User's Resources
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 input-labels-bold">
                        User's Saved Resources
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 input-labels">
                <div className="card mb-4" id="profile-card">
                  <div className="row">
                    <div className="col-md-12">
                      <h6> Username: {props.userName}</h6>
                      <h6> Email: {props.emailAddress}</h6>
                      <h6> Name: {props.fullName}</h6>
                      <h6> Age: {props.age}</h6>
                      <h6> Gender: {props.gender}</h6>
                      <h6> Location: {props.location}</h6>
                      
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn" id="profile-button">
                        Edit Profile
                      </button>
                      <button className="btn" id="profile-button">
                        Delete Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12">
                      <h6 className="input-labels-bold">About Me:</h6>
                      </div>
                    </div>
                    <div className="row ml-1">
                      <div className="col-md-12 input-labels">
                    <p>
                      {props.bio}
                    </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <ProfileChanges
        handleFirstNameChange={props.handleFirstNameChange}
        handleLastNameChange={props.handleLastNameChange}
        handleUserNameChange={props.handleUserNameChange}
        handleAgeChange={props.handleAgeChange}
        handleGenderChange={props.handleGenderChange}
        handleLocationChange={props.handleLocationChange}
        handleBioChange={props.handleBioChange}
        handleEditSubmit={props.handleEditSubmit}
         />
      </div>
    </div>
  );
};

export default ProfileBody;
