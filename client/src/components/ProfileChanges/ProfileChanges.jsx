import React, {useState} from "react";
import ProfileDown from "./ProfileDown";

const ProfileChanges = () => {
    
  return (
    <div className="container">
      <div className="row">
        <div class="form-group col-md-4">
        <input className="form-control" type="text" placeholder="Username" />
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
          />
          <input className="form-control" type="text" placeholder="Last Name" />
          <input className="form-control" type="number" placeholder="Age" />
          <label for="inputState">Gender</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group col-md-4">
          <div classNam="col-sm-6">
            <div className="row ml-5">
              <div className="form-group input-labels">
                <label id="category-label" for="category">
                  Select catagories that apply:
                </label>
                <ProfileDown />
              </div>
            </div>
          </div>
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">About Me:</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </div>
      <button className="btn">Submit Edits</button>
    </div>
  );
};

export default ProfileChanges;
