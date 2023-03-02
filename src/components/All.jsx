import React from "react";
// import Header from "./Header";
import About from "./About";
// import CV from "./CV";
import Utbildning from "./Utbildning";
import Work from "./Work";

import Ovrigt from "./Ovrigt";
import Kontakt from "./Kontakt";
// import Portfolio from "./Portfolio";
import Start from "./Start";
const All = () => {
  return (
    <div className="bg-space h-fit w-screen flex flex-col">
      {/* <Header /> */}
      <Start />
      <About />
      {/* <CV /> */}
	  <Work />
      <Utbildning />
	  <Ovrigt/>
      <Kontakt />



    </div>
  );
};

export default All;
