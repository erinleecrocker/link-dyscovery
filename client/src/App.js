// React Imports
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Page Imports
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import UserHome from "./pages/UserHome";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserResources from "./pages/UserResources";
import ResourceCategory from "./pages/ResourceCategory";
import UserResourceCategory from "./pages/UserResourceCategory";
import VerifiedResources from "./pages/VerifiedResources";
import UserVerifiedResources from "./pages/UserVerifiedResources";
// Component Imports
// import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { setAxiosDefaults } from "./utils/axiosDefaults";
// CSS Imports
import "./App.css";
// import HomePageContainer from './components/HomePageContainer/HomePageContainer';

function App() {
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    if (jwt) {
      setAxiosDefaults(jwt);
    }
  },[jwt])

  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}

          <Route exact path="/" component={Home} />
          <Route exact path="/link-dyscovery" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/user-home" component={UserHome} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/user-resources" component={UserResources} />
          <Route exact path="/resource-category" component={ResourceCategory} />
          <Route exact path="/user-resource-category" component={UserResourceCategory} />
          <Route exact path="/verified-resources" component={VerifiedResources} />
          <Route exact path="/verified-resources-user" component={UserVerifiedResources} />
          {/* <Route path="*" component={Home} /> */}

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
