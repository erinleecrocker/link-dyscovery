import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "../components/Form/Form";
import LoginCard from "../components/LoginCard/LoginCard"
import SubmitButton from "../components/Submit Button/SubmitButton"
// import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const validateForm = () => {
      return email.length > 0 && password.length > 0;
    }
  
    const handleSubmit = e => {
        e.preventDefault();
    }
  
    return (
        <div className="container">
        <div className="row">
          <div className="col-12">
        <LoginCard>
      
      <div className="Login">
        <form onSubmit={handleSubmit}>
        <div className="row">
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>E-mail: </FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </FormGroup>
          </div>
          <div className="row">
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password: </FormLabel>
            <FormControl
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </FormGroup>
          </div>
          <div className="row">
          <SubmitButton  disabled={!validateForm()} type="submit">
            Login
          </SubmitButton>
          </div>
        </form>
      </div>
      </LoginCard>
      </div>
      </div>
    </div>
    );
  }