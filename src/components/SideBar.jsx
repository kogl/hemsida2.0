import React, { useState } from "react";
import "../App.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="w-8 h-8 "
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
          stroke="white"
          className="w-8 h-8 "
          onClick={toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-8 w-1/2 h-screen bg-bajen flex flex-col justify-start items-center menu shadow-2xl ${
            !isOpen ? "closed-menu" : "closed-menu"
          }`}
        >
          <div className="bg-bajen text-white pt-4">Start</div>
          <div className="bg-bajen text-white pt-4">CV</div>
          <div className="bg-bajen text-white pt-4">Portfolio</div>
          <div className="bg-bajen text-white pt-4">Kontakt</div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
