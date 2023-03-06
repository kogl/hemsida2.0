import React from "react";

import Utblist from "./UtbList";

const Utbildning = () => {
  return (
    <div className="w-screen h-fit flex flex-col md:flex-row justify-center items-center  md:items-start bg-lightgreen bg-no-repeat bg-cover bg-center md:bg-wave2">
      {/* <div className=""> */}
	  <h1 className="md:text-rubrik text-liten font-myfont4 cursor-none ">
        Utbildning
      </h1>
        <Utblist />
      {/* </div> */}
      
      {/* <div className="justify-start items-start flex bg-no-repeat bg-cover bg-center bg-wave2 h-screen"></div> */}
    </div>
  );
};

export default Utbildning;
