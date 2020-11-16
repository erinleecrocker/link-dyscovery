// React Imports
// import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Page Imports
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import VerifiedResources from "./pages/VerifiedResources";
import Login from "./pages/Login";
//Non-User Verified Resource Category Pages
import ResourceCategory from "./pages/ResourceCategory";
import ADHD from "./pages/CategoryPages/ADHD";
import Dyscalculia from "./pages/CategoryPages/Dyscalculia";
import Dysgraphia from "./pages/CategoryPages/Dysgraphia";
import Dyslexia from "./pages/CategoryPages/Dyslexia";
import ProcessingDeficits from "./pages/CategoryPages/ProcessingDeficits";
//Authorized User Pages
import AuthHome from "./pages/AuthPages/AuthHome";
import AuthVerifiedResources from "./pages/AuthPages/AuthVerifiedResources";
import Profile from "./pages/AuthPages/Profile";
import UserResources from "./pages/AuthPages/UserResources";
import UserResourceCategory from "./pages/AuthPages/UserResourceCategory";
//Authorized Verified Resource Category Pages
import AuthResourceCategory from "./pages/AuthPages/AuthResourceCategory";
import AuthADHD from "./pages/AuthCategoryPages/AuthADHD";
import AuthDyscalculia from "./pages/AuthCategoryPages/AuthDyscalculia";
import AuthDysgraphia from "./pages/AuthCategoryPages/AuthDysgraphia";
import AuthDyslexia from "./pages/AuthCategoryPages/AuthDyslexia";
import AuthProcessingDeficits from "./pages/AuthCategoryPages/AuthProcessingDeficits";
//User Contributed Resource Category Pages
import UserADHD from "./pages/UserResCategory/UserADHD";
import UserDyslexia from "./pages/UserResCategory/UserDyslexia";
import UserDyscalculia from "./pages/UserResCategory/UserDyscalculia";
import UserDysgraphia from "./pages/UserResCategory/UserDysgraphia";
import UserProcessingDeficits from "./pages/UserResCategory/UserProcessingDeficits";





// Component Imports
// import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import { setAxiosDefaults } from "./utils/axiosDefaults";
// CSS Imports
import "./App.css";
// import HomePageContainer from './components/HomePageContainer/HomePageContainer';

function App() {
  // const [jwt, setJwt] = useState("");

  // useEffect(() => {
  //   if (jwt) {
  //     setAxiosDefaults(jwt);
  //   }
  // },[jwt])

  return (
    <>
      <BrowserRouter>
        <div className="App">
          {/* <Navbar /> */}

          <Route exact path="/" component={Home} />
          <Route exact path="/link-dyscovery" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/auth-home" component={AuthHome} />
          <Route exact path="/create-account" component={CreateAccount} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/adhd" component={ADHD} />
          <Route exact path="/dyscalculia" component={Dyscalculia} />
          <Route exact path="/dysgraphia" component={Dysgraphia} />
          <Route exact path="/dyslexia" component={Dyslexia} />
          <Route exact path="/processing-deficits" component={ProcessingDeficits} />
          <Route exact path="/auth-adhd" component={AuthADHD} />
          <Route exact path="/auth-dyscalculia" component={AuthDyscalculia} />
          <Route exact path="/auth-dysgraphia" component={AuthDysgraphia} />
          <Route exact path="/auth-dyslexia" component={AuthDyslexia} />
          <Route exact path="/auth-processing-deficits" component={AuthProcessingDeficits} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/user-resources" component={UserResources} />
          <Route exact path="/user-resource-category" component={UserResourceCategory} />
          <Route exact path="/user-adhd" component={UserADHD} />
          <Route exact path="/user-dyslexia" component={UserDyslexia} />
          <Route exact path="/user-dyscalculia" component={UserDyscalculia} />
          <Route exact path="/user-dysgraphia" component={UserDysgraphia} />
          <Route exact path="/user-processing-deficits" component={UserProcessingDeficits} />
          <Route exact path="/resource-category" component={ResourceCategory} />
          <Route exact path="/auth-resource-category" component={AuthResourceCategory} />
          <Route exact path="/verified-resources" component={VerifiedResources} />
          <Route exact path="/verified-resources-auth" component={AuthVerifiedResources} />
          {/* <Route path="*" component={Home} /> */}

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
