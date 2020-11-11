import React, {useEffect} from "react";
import ProfileModal from "../ProfileModal/ProfileModal"

import ProfilePlaceholder from "../../images/profilePlaceholder.png";

import "./ProfileBody.css";

const ProfileBody = () => {

  // const handleEditModal = () => {
  //   <ProfileModal />
  // }


  return (
    <div className="container defaultStyle">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-3">
              <img id="profilePic" src={ProfilePlaceholder} alt="placeholder" />
            </div>
            <div className="col-md-4">
              <h6>Username: </h6>
              <h6> Email: </h6>
              <h6> Name: </h6>
              <h6> Age: </h6>
              <h6> Gender: </h6>
              <h6> Location: </h6>
              <h6> LDs: </h6>
              <button className="btn btn-outline-dark">Edit Profile</button>
            </div>
            <div className="col-md-5">
              <h6>About Me:</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur autem eos nisi id placeat ex aspernatur culpa, a
                dolorum sequi omnis! Est ea optio unde animi voluptatibus. Fuga,
                pariatur possimus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minus, eum. A natus rerum facilis, cumque eos
                ipsum ut deleniti quibusdam mollitia optio atque repellendus,
                voluptates iste ratione cum! Non, iusto.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">User's Resources</div>
          </div>
          <div className="row">
            <div className="col-md-12">User's Saved Resources</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
