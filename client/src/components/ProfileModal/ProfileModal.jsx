import React from "react";

const ProfileModal = () => {
  return (
    <div className="modal" tabindex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit Profile Information</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              type="text"
              placeholder="First Name"
            />
            <input
              className="form-control"
              type="text"
              placeholder="Last Name"
            />
            <input className="form-control" type="number" placeholder="Age" />
            <div class="form-group col-md-4">
              <label for="inputState">Gender</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div class="form-group col-md-4">
              <select class="selectpicker" multiple>
                <option>Oral/Written Language Disorder</option>
                <option>Specific Reading Comprehension Deficit</option>
                <option>Non-Verbal Learning Disability</option>
                <option>Dysgraphia</option>
                <option>Dyscalculia</option>
                <option>Dyslexia</option>
              </select>
            </div>

            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">About Me:</span>
              </div>
              <textarea
                class="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
