import React, { useState } from "react";

const MenuList = () => {
  const [isSwe, setIsSwe] = useState(true);
  const toggleMenu = () => {
    setIsSwe(!isSwe);
  };

  return (
    <div className="font-myfont2 text-4xl  flex flex-col justify-center items-end mt-24 pr-12 cursor-pointer">
      <div className="flex flex-row justify-center items-center  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>
        {isSwe ? <p className="pl-3">Hem</p> : <p className="pl-3">Home</p>}
      </div>
      <div className="flex flex-row justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        {isSwe ? (
          <p className="pl-3">Vem Är Jag</p>
        ) : (
          <p className="pl-3">How Im I</p>
        )}
      </div>
      <div className="flex flex-row justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
          />
        </svg>

        <p className="pl-3">CV</p>
      </div>
      {/* <div className="">Portfolio</div> */}
      <div className="flex flex-row justify-center items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-10 h-10"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>
        {isSwe ? (
          <p className="pl-3">Kontakt</p>
        ) : (
          <p className="pl-3">Contact</p>
        )}
      </div>
      <div className="flex flex-col h-1/2 justify-center items-end mt-10">
        {isSwe ? (
          <div className="flex flex-row" onClick={toggleMenu}>
            <p className="text-lightgreen">SV</p>
            <p className="text-black">||</p>
            <p className="text-vitt">EN</p>
          </div>
        ) : (
          <div className="flex flex-row" onClick={toggleMenu}>
            <p className="text-vitt">SV</p>
            <p className="text-black">||</p>
            <p className="text-lightgreen">EN</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuList;
