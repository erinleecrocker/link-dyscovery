// React Imports
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Page Imports
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import UserResources from "./pages/UserResources";
import ResourceCategory from "./pages/ResourceCategory";
import VerifiedResources from "./pages/VerifiedResources";
// Component Imports
import Navbar from "./components/Navbar/Navbar";
// CSS Imports
import './App.css';
// import HomePageContainer from './components/HomePageContainer/HomePageContainer';


function App() {
  return (
    <>
      <BrowserRouter>
      
        <div className="App">
        <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/link-dyscovery" component={Home} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/user-resources" component={UserResources} />
          <Route exact path="/ResourceCategory" component={ResourceCategory} />
          <Route exact path="/verified-resources" component={VerifiedResources} />

        </div>
      </BrowserRouter>
    </>
    // <div className="App">
    //   {/* <HomePageContainer/> */}
    //   <Login></Login>
    // </div>
  );
}

export default App;