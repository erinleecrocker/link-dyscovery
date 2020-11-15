import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import axios from "axios";
import SignupForm from "../components/SignupForm/SignupForm";
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';

const LogIn = () => {
  const { setJwt } = useContext(AuthContext);
  const history = useHistory();

  // const validateForm = () => {
  //   return emailAddress.length > 0 && password.length > 0;
  // };

  const handleSubmit = (e, emailAddress, password) => {
    e.preventDefault();
    axios
      .post("/api/login", { emailAddress, password })
      .then((response) => {
        // console.log(response)
        // console.log(response.data);
        setJwt(response.data.data);
        localStorage.setItem("loginId", response.data._id)
        history.push("/profile/" + response.data._id);

      })
      .catch((err) => {
        alert("Invalid email or password");
        console.log(err);
      });
  };
  return (
    <>
    <Navbar/>
      <SignupForm
        cardText="Login"
        handleSubmit={handleSubmit}
        buttonText="Login"
        slug="login"
        // disabled={!validateForm()}
      />
    </>
  );
};

export default LogIn;
  
  

//   return (
//     <>
//       <LoginCard>
//         <h2 className="card-title">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <FormGroup controlId="email" bsSize="large">
//             <FormLabel>E-mail </FormLabel>
//             <FormControl
//               autoFocus
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormGroup>
//           <div>
//             <FormGroup controlId="password" bsSize="large">
//               <FormLabel>Password </FormLabel>
//               <FormControl
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 type="password"
//               />
//             </FormGroup>
//           </div>
//           <div>
//             <SubmitButton disabled={!validateForm()} type="submit">
//               Login
//             </SubmitButton>
//           </div>
//         </form>
//       </LoginCard>
//     </>
//   );
// }
