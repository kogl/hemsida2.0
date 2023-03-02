import React, { useState } from "react";

import { motion } from "framer-motion";
import MenuList from "./MenuList";

// import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const variants = {
    open: {  x: 0 },
    closed: {  x: "100%" },
  };

  return (
    <div className="w-screen items-center justify-between md:h-36 sm:10  flex flex-row drop-shadow-2xl fixed top-0 left-0 right-0">
      <div className=" text-black ml-4 font-myfont4 text-lg  ">
        Oskar Ljungdahl
      </div>
      <div className="  ">
        {/* <div className="w-1/2 flex flex-row items-center justify-end pr-4 block md:hidden "> */}
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-12 h-12 z-50 fixed right-10 top-10 pa-2 bg-lightgreen rounded-full cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="black"
            className="w-12 h-12 z-50 fixed right-10 top-10 pa-2 bg-lightgreen rounded-full cursor-pointer"
            onClick={toggleMenu}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}

        <motion.div
          className="fixed right-0 top-0 w-1/2 h-screen bg-white  shadow-2xl "
          animate={isOpen ? "open" : "closed"}
          variants={variants}
		  transition={{ type: "spring", damping: 15  }}


          //   ref={containerRef}
        >
          <MenuList />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
