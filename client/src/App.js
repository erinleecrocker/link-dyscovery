// React Imports
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Page Imports
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import AuthHome from "./pages/AuthPages/AuthHome";
import Login from "./pages/Login";
import Profile from "./pages/AuthPages/Profile";
import UserResources from "./pages/AuthPages/UserResources";
import ResourceCategory from "./pages/ResourceCategory";
import ADHD from "./pages/CategoryPages/ADHD";
import Dyscalculia from "./pages/CategoryPages/Dyscalculia";
import Dysgraphia from "./pages/CategoryPages/Dysgraphia";
import Dyslexia from "./pages/CategoryPages/Dyslexia";
import ProcessingDeficits from "./pages/CategoryPages/ProcessingDeficits";
import AuthADHD from "./pages/AuthCategoryPages/AuthADHD";
import AuthDyscalculia from "./pages/AuthCategoryPages/AuthDyscalculia";
import AuthDysgraphia from "./pages/AuthCategoryPages/AuthDysgraphia";
import AuthDyslexia from "./pages/AuthCategoryPages/AuthDyslexia";
import AuthProcessingDeficits from "./pages/AuthCategoryPages/AuthProcessingDeficits";
import AuthResourceCategory from "./pages/AuthPages/AuthResourceCategory";
import VerifiedResources from "./pages/VerifiedResources";
import AuthVerifiedResources from "./pages/AuthPages/AuthVerifiedResources";
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
