import React from "react";
import AboutText from "./AboutText";

import { useSelector } from "react-redux";
// import { setIsSwe } from "../redux/language";
// import { motion } from "framer-motion";
const About = () => {
  const isSwe = useSelector((state) => state.language.isSwe);

  return (
    <div className="h-screen bg-lightgreen flex flex-row">
      <div
        className=" w-1/3 h-screen flex-col justify-start flex items-end"
        id="about"
      >
        <div className="bg-vitt rounded-bl-full h-1/2 w-1/2"></div>
      </div>

      <div className="bg-vitt flex-col w-1/3 justify-center items-start h-screen rounded-br-full">
        {isSwe ? (
          <h1 className="font-myfont4 text-liten  md:text-rubrik flex flex-col justify-center items-center w-full cursor-none">
            MIG
          </h1>
        ) : (
          <h1 className="font-myfont4 text-liten  md:text-rubrik flex flex-col justify-center items-center w-full cursor-none">
            ME
          </h1>
        )}
      </div>

      <div className="justify-center items-start text-about flex flex-col">
        <AboutText />
        <div className="flex flex-row px-8 py-6">
          <div className="bg-vitt rounded-full px-2 py-2 mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 mt-1 md:w-16 md:h-16 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
          </div>
          <div className="bg-vitt rounded-full px-2 py-2 ml-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 mt-1 md:w-16 md:h-16 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
