import React from "react";
import WorkList from "./WorkList";

const Work = () => {
  return (
    <div className="w-screen h-screen bg-white flex flex-col justify-center items-center bg-wavener bg-no-repeat">
      <div className="text-rubrik font-myfont4  h-1/2 w-screen  justify-start items-end flex cursor-none">
        ARBETS_______
      </div>
      <div className="h-1/2 w-screen flex-row flex  justify-center items-center bg-waveupp bg-no-repeat  bg-cover">
        <WorkList />
      </div>
    </div>
  );
};

export default Work;
