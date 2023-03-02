import React from "react";
import Utbildning from "./Utbildning";
import Work from "./Work";

import Ovrigt from "./Ovrigt";
// import Portfolio from "./Portfolio";

const CV = () => {
  return (
    <div className="h-screen w-screen ">
  
      <Work />
	  <Ovrigt/>
      <Utbildning />
      {/* <Portfolio /> */}
	  
    </div>
  );
};

export default CV;
