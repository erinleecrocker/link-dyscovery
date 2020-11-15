import React from "react";
import ProfileChanges from "../ProfileChanges/ProfileChanges";
import ProfilePlaceholder from "../../images/profilePlaceholder.png";

import "./ProfileBody.css";

const ProfileBody = (props) => {
  // const [modalShow, setModalShow] = React.useState(false);



  return (
    <div className="container">
      <div className="row">
        <div className="card">
          <div className="card-body defaultStyle">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 mr-2">
                  <div className="row">
                    <div className="col-md-12">
                      <img
                        id="profilePic"
                        src={ProfilePlaceholder}
                        alt="placeholder"
                      />
                    </div>
                    {/* CLOUDINARY PROFILE IMAGE */}
                    {/* <form className="form" onSubmit={props.handleSubmitFile}>
                      <input className="form-input" type="file" name="image" onChange={props.handleFileInputChange} value={props.fileInput} ></input>
                      <button className="btn btn-outline-dark" type="submit">Submit</button>
                    </form>
                    {props.previewSource && (
                      <img src={props.previewSource} alt="chosen" style={{ height: '200px', width: "auto" }} />
                    )} */}
                  </div>
                </div>
                <div className="col-md-4 input-labels">
                  <div className="card mb-4 profile-card">
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
                        <button
                          className="btn"
                          id="profile-button"
                          variant="primary"
                          onClick={props.handleModalShow}
                        >
                          Edit Profile
                        </button>
                        <button
                          onClick={props.handleDeleteSubmit}
                          className="btn"
                          id="profile-button"
                        >
                          Delete Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="card profile-card">
                        <div className="row">
                          <div className="col-md-12">
                            <h6 className="input-labels-bold">About Me:</h6>
                          </div>
                        </div>
                        <div className="row ml-1">
                          <div className="col-md-12 input-labels">
                            <p>{props.bio}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-4 mt-4 ml-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <ProfileChanges
            show={props.modalShow}
            
            onHide={props.handleModalHide}
            handleFirstNameChange={props.handleFirstNameChange}
            handleLastNameChange={props.handleLastNameChange}
            handleUserNameChange={props.handleUserNameChange}
            handleAgeChange={props.handleAgeChange}
            handleGenderChange={props.handleGenderChange}
            handleLocationChange={props.handleLocationChange}
            handleBioChange={props.handleBioChange}
            handleEditSubmit={props.handleEditSubmit}
            // Username = {props.userName}
            // Email = {props.emailAddress}
            // Name = {props.fullName}
            // Age = {props.age}
            // Gender = {props.gender}
            // Location = {props.location}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
