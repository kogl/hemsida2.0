import React from "react";
import OvrigtList from "./OvrigtList";

const Ovrigt = () => {
  return (
    <div className="text-svart h-fit w-screen flex flex-row   md:justify-end md:items-start md:bg-waveupp md:bg-no-repeat md:bg-cover ">
      <div className="items-center justify-center md:justify-end md:items-center flex flex-col w-1/2">
        <OvrigtList />
      </div>
      <div className="w-1/2 h-screen text-liten md:text-rubrik font-myfont4 md:bg-waver  md:bg-cover md:bg-white">Vad Kan Jag</div>
    </div>
  );
};
// items-start justify-start
export default Ovrigt;


