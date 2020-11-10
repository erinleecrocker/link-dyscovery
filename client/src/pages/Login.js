import React, { useState } from "react";
import { FormGroup, FormControl, FormLabel } from "../components/Form/Form";
import LoginCard from "../components/LoginCard/LoginCard";
import SubmitButton from "../components/Submit Button/SubmitButton";
import "../components/LoginCard/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <LoginCard>
        <h2 className="card-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>E-mail: </FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <div>
            <FormGroup controlId="password" bsSize="large">
              <FormLabel>Password: </FormLabel>
              <FormControl
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
          </div>
          <div>
            <SubmitButton disabled={!validateForm()} type="submit">
              Login
            </SubmitButton>
          </div>
        </form>
      </LoginCard>
    </>
  );
}
