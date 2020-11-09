import React from "react";
import "./Login.css";

//Container for the table
function LoginCard(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Login</h3>
          <p className="card-text">{props.children}</p>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
