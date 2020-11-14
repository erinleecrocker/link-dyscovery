import React from "react";
import './ResourceResultDisplay.css'

const ResourceResultDisplay = (props) => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="card" id="resource-box">
            {props.children}
        </div>
      </div>
    </div>
  );
};

export default ResourceResultDisplay;
