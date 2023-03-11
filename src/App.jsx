import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Start from "./components/Start/Start";
import About from "./components/About/About";

import Work from "./components/Work/Work";
import Utbildning from "./components/Education/Utbildning";
import Kontakt from "./components/Contact/Kontakt";
import Ovrigt from "./components/Ovrigt/Ovrigt";

function App() {
  return (
    <div className="App ma-0 pa-0 ">
      <Header />
      <Start />
      <About />
      <Work />
      <Utbildning />
      <Ovrigt />
      <Kontakt />
    </div>
  );
}

export default App;
