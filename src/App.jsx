import React from "react";
import "./App.css";
import Header from "./components/Header";
import Start from "./components/Start";
import About from "./components/About";

import Work from "./components/Work";
import Utbildning from "./components/Utbildning";
import Kontakt from "./components/Kontakt";
import Ovrigt from "./components/Ovrigt";

function App() {
  return (
    <div className="App ma-0 pa-0 ">
      <Header />
      <Start />
      <About />
      <Work />
      <Utbildning />
      {/* <Ovrigt /> */}
      <Kontakt />
    </div>
  );
}

export default App;
