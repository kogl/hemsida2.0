import React from "react";
import WorkList from "./WorkList";
import WorkListEng from "./WorkListEng";
import { useSelector } from "react-redux";

const Work = () => {
  const isSwe = useSelector((state) => state.language.isSwe);

  return (
    <div
      className="w-screen h-full bg-white flex flex-col justify-center items-center bg-wavener bg-no-repeat"
      id="cv"
    >
      {isSwe ? (
        <p className="md:text-rubrik text-liten font-myfont4 h-1/6 md:h-1/2 w-screen  justify-start items-end flex cursor-none">
          Arbetslivserfarhet
        </p>
      ) : (
        <p className="md:text-rubrik text-liten font-myfont4 h-1/6 md:h-1/2 w-screen  justify-start items-end flex cursor-none">
          Work History
        </p>
      )}
      <div className="md:h-screen w-screen flex-row flex  justify-center items-center bg-waveupp bg-no-repeat bg-cover">
        {isSwe ? <WorkList /> : <WorkListEng />}
      </div>
    </div>
  );
};

export default Work;
