import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import MenuList from "../Header/MenuList";
import { setIsOpen } from "../../redux/menu";

// import "../App.css";

const Header = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.menu.isOpen);

  const toggleMenu = () => {
    dispatch(setIsOpen(!isOpen));
  };

  const variants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  return (
    <div className="w-screen items-center justify-between md:h-36 h-12 flex flex-row drop-shadow-2xl fixed top-0 left-0 right-0 z-50">
      <div className="fixed top-0 w-full text-black ml-4 font-myfont4 text-sm md:text-lg flex flex-row ">
        <div className="justify-start items-end text-vitt ">
          Oskar Ljungdahl
        </div>

        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="white"
            className="w-10 h-10 z-50 fixed right-5 top-5 pa-4 bg-lightgreen rounded-full cursor-pointer"
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
            strokeWidth="1"
            stroke="white"
            className="w-10 h-10 z-50 fixed right-5 top-5 pa-4 bg-lightgreen rounded-full cursor-pointer"
            onClick={() => dispatch(toggleMenu())}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}

        <motion.div
          className="fixed right-0 top-0 md:w-1/5 h-screen sm:w-32 justify-center items-start flex bg-white shadow-2xl"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ type: "spring", damping: 15 }}
        >
          <MenuList />
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
