import React from "react";
import OvrigtList from "./OvrigtList";

const Ovrigt = () => {
  return (
    <div className="text-svart h-fit w-screen flex flex-row  bg-white md:justify-end md:items-start md:bg-waveupp md:bg-no-repeat md:bg-cover ">
      <div className="items-center justify-center md:justify-end flex flex-col w-1/2">
        <OvrigtList />
      </div>
      <div className="w-1/2 flex flex-row h-screen items-start justify-center text-liten md:text-rubrik font-myfont4">
        <h1 className="text-center">Vad Kan Jag</h1>
      </div>
    </div>
  );
};
// items-start justify-start
export default Ovrigt;
