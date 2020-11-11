import React, { useLayoutEffect, useRef, useState } from "react";
import { FormGroup, FormControl, FormLabel } from "../Form/Form";
import LoginCard from "../LoginCard/LoginCard"
import SubmitButton from "../Submit Button/SubmitButton"

const SignupForm = ({ buttonText, handleSubmit, slug }) => {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const firstInputRef = useRef();

  // useLayoutEffect(() => {
  //   firstInputRef.current.focus();
  // }, []);


  return (
      <LoginCard>
        <h2 className="card-title"></h2>
          <div>
    <form
      onSubmit={(e) => {
        handleSubmit(e, emailAddress, password);
      }}
    >
      <FormGroup>
        <FormLabel htmlFor="signup-email">Email address</FormLabel>
        <FormControl
          type="email"
          className="form-control"
          id={`${slug}-emailAddress`}
          name="emailAddress"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          ref={firstInputRef}
        />
      </FormGroup>
      <div>
      <FormGroup>
        <FormLabel htmlFor="signup-password">Password</FormLabel>
        <FormControl
          type="password"
          className="form-control"
          id={`${slug}-password`}
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormGroup>
      </div>
      <div className="col text-center">
        <SubmitButton onClick={handleSubmit} type="submit" className="btn btn-primary">
          {buttonText}
        </SubmitButton>
      </div>
    </form>
    </div>
    </LoginCard>
  );
};

export default SignupForm;