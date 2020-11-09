import React from "react";
import Login from "./pages/Login";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePageContainer from './components/HomePageContainer/HomePageContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePageContainer/>
      <Login></Login>
    </div>
  );
}

export default App;
