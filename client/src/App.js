import React from "react";
// import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <div className="App">
        {/* <Navbar/> */}
          <Home/>
            {/* <Login></Login> */}
        {/* <Footer/> */}
    </div>
  );
  
}

export default App;
