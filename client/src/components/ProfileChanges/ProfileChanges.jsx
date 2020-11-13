import React, { useState } from "react";

const ProfileChanges = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="form">
          <div className="form-group col-md-4">
            <input
              onChange={props.handleUserNameChange}
              className="form-control"
              type="text"
              placeholder="Username"
            />
            <input
              onChange={props.handleFirstNameChange}
              className="form-control"
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={props.handleLastNameChange}
              className="form-control"
              type="text"
              placeholder="Last Name"
            />
            <input
              onChange={props.handleAgeChange}
              className="form-control"
              type="number"
              placeholder="Age"
            />
            <input
              onChange={props.handleLocationChange}
              className="form-control"
              type="text"
              placeholder="Location"
            />
            <label htmlFor="inputState">Gender</label>
            <select
              onChange={props.handleGenderChange}
              id="inputState"
              className="form-control"
            >
              <option>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

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

            <button onClick={props.handleEditSubmit} className="btn">Submit Edits</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileChanges;
