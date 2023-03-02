import React from "react";

import Utblist from "./UtbList";

const Utbildning = () => {
  return (
    <div className="w-screen h-screen flex flex-row justify-evenly items-start bg-lightgreen">
      <Utblist />

      <div className=" h-screen w-screen  justify-start items-start flex bg-no-repeat bg-cover bg-center   bg-wave2">
        <h1 className="text-rubrik font-myfont4 ">Utbildning</h1>
      </div>
    </div>
  );
};

export default Utbildning;
