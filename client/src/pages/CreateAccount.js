import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import SignupForm from "../components/SignupForm/SignupForm";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { setJwt } = useContext(AuthContext);
  const history = useHistory();


  const handleSubmit = (e, emailAddress, password) => {
    e.preventDefault();
    axios
      .post("/api/signup", { emailAddress, password })
      .then((response) => {
        console.log(response.data);
        setJwt(response.data.data);
        history.push("/profile");
      })
      .catch((err) => {
        alert("This email is already in use. Please login or use a different email.")
        console.log(err);
      });
  };

  return (
    <>
      <SignupForm
        handleSubmit={handleSubmit}
        buttonText="Create Account"
        slug="signup"
        cardText="Create Account"
        // disabled={!validateForm()}
      />
    </>
  );
};

export default SignUp;
