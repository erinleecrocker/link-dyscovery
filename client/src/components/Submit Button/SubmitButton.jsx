import React from "react";
import "./SubmitButton.css";

function SubmitButton(props) {
    return (
      <button {...props} className="btn btn-submit">
        {props.children}
      </button>
    );
  }

export default SubmitButton;
