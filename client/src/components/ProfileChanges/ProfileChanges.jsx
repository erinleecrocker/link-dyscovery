import React, { useState } from "react";
import './ProfileChanges.css';


const ProfileChanges = (props) => {
  return (
    // <div className="container">
    <div className="col-md-6">
      <div className="form">
        <div className="card" id="defaultStyleProfile">
        <div className="row mb-4 mt-1">
          <div className="col-md-12">
          <h5>Edit Profile: </h5>
          </div>
        </div>
          <div className="form-group">
            <div className="col-md-12">
              <div className="row mb-2">
                <input
                  onChange={props.handleUserNameChange}
                  className="form-control"
                  type="text"
                  placeholder="Username"
                />
              </div>
              <div className="row mb-2">
                <input
                  onChange={props.handleFirstNameChange}
                  className="form-control"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="row mb-2">
                <input
                  onChange={props.handleLastNameChange}
                  className="form-control"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="row mb-2">
                <input
                  onChange={props.handleAgeChange}
                  className="form-control"
                  type="number"
                  placeholder="Age"
                />
              </div>
              <div className="row mb-2">
                <input
                  onChange={props.handleLocationChange}
                  className="form-control"
                  type="text"
                  placeholder="Location"
                />
              </div>
              <div className="row mb-2">
                <select
                  onChange={props.handleGenderChange}
                  id="inputState"
                  className="form-control"
                >
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="row">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">About Me:</span>
                  </div>
                  <textarea
                    onChange={props.handleBioChange}
                    className="form-control"
                    aria-label="With textarea"
                  ></textarea>
                </div>
              </div>
              <div className="row text-center mt-2">
                <div className="col-md-12">
                <button onClick={props.handleEditSubmit} className="btn btn-primary" id="submit-change-button">
                  Submit Edits
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChanges;
