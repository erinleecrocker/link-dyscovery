import React from "react";
import "./ResourceBox.css";
// import ResourceSearchBar from "../ResourceSearchBar/ResourceSearchBar";

const ResourceBox = (props) => {
  return (
    <div className="container">
        {props.children}
    </div>
  );
};

export default ResourceBox;
