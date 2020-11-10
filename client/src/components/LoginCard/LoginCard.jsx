import React from "react";
import "./Login.css";

//Container for the table
function LoginCard(props) {
  return (
    <div className="container login-container">
      <div className="card">
        {/* <div className="card-body"> */}
          {/* <h2 className="card-title">Login</h2> */}
          <div className="card-text">{props.children}</div>
        </div>
        </div>
        // </div>
  );
}

export default LoginCard;
