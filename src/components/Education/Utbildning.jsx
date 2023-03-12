import React from "react";
import { useSelector } from "react-redux";

import Utblist from "./UtbList";
import UtblistEng from "./UtbListEng";

const Utbildning = () => {
  const isSwe = useSelector((state) => state.language.isSwe);

  return (
    <div className="w-screen h-screen flex flex-col md:flex-row justify-center items-center  md:items-start bg-lightgreen bg-no-repeat bg-cover bg-center md:bg-wave2">
      {isSwe ? (
        <h1 className="md:text-rubrik text-liten font-myfont4 cursor-none ">
          Utbildning
        </h1>
      ) : (
        <h1 className="md:text-rubrik text-liten font-myfont4 cursor-none ">
          Education
        </h1>
      )}
      {isSwe ? <Utblist /> : <UtblistEng />}
    </div>
  );
};

export default Utbildning;
