import React from "react";
// import { Routes, Route } from "react-router-dom";

// import { ParallaxProvider } from "react-scroll-parallax";
// import { Parallax } from "react-scroll-parallax";
// import   '../animate.css'

import "./App.css";
import Header from "./components/Header";
import Start from "./components/Start";
import About from "./components/About";
import CV from "./components/CV";
import Kontakt from "./components/Kontakt";
// import Portfolio from "./components/Portfolio";
import Ovrigt from "./components/Ovrigt";
// import All from "./components/All";

function App() {
  return (
    <div className="App ma-0 pa-0 ">
      <Header />
      <Start /> 
      <About /> 
      <CV />  
      <Kontakt/>  
      <Ovrigt />  
      {/* <All />  */}

      {/* <Routes>
        <Route path="/" element={<All />} />
        
      </Routes> */}
    </div>
  );
}

export default App;
