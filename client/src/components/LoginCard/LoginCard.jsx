import React from "react";
import "./Login.css";

//Container for the table
function LoginCard(props) {
  return (
    <div className="container login-card">
      <div className="card">
        <div className="card-body">
          <div className="card-text">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
