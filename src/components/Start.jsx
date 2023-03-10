// import { React, useRef } from "react";
import { React } from "react";
// import Header from "./Header";
import { motion,  } from "framer-motion";

// import "../animate.css";
import { useSelector } from "react-redux";

const Start = () => {
  const isSwe = useSelector((state) => state.language.isSwe);

  const variants = {
    offscreen: {
      y: -300,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
    onscreen: {
      y: 0,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col h-max w-screen  "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
	  id='hej'
    >
      <div className="h-screen w-screen  flex flex-row">
        <div className="bg-lightgreen h-screen w-screen justify-end items-end flex flex-col ">
          <div className="justify-center items-center flex-col flex text-vitt w-full h-2/5 font-myfont3 font-bold text-side ">
            {/* <h1 className=''>Design,</h1>
				<h1>Develop</h1>
				<h1>Deliver</h1> */}
          </div>
          <div className="w-full h-2/5 bg-vitt  justify-end items-center rounded-tl-full flex flex-col	"></div>
        </div>
        <div className="bg-lightgreen h-screen w-screen justify-center items-end flex">
          <div className="flex flex-col w-full h-1/5 md:h-2/5  bg-vitt  justify-end items-center rounded-tr-full  font-myfont4 text-liten  md:text-rubrik">
            {isSwe ? (
              <div className="font-myfont4 text-liten  md:text-rubrik flex flex-col justify-center items-center w-full cursor-none">
                <h1 className=" cursor-none">MER</h1>
                <h1 className="cursor-none	">OM</h1>
              </div>
            ) : (
              <div className="">
                <h1 className="font-myfont4 text-liten  md:text-rubrik flex flex-col justify-center items-center w-full cursor-none">
                  MORE
                </h1>
                <h1 className="font-myfont4 text-liten  md:text-rubrik flex flex-col justify-center items-center w-full cursor-none">
                  ABOUT
                </h1>
              </div>
            )}

            <motion.div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#18FFBD"
                className="w-8 h-8 mt-1 md:w-16 md:h-16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </motion.div>
          </div>
        </div>

        <div className="bg-lightgreen h-screen w-screen flex justify-center items-center">
          <motion.div
            className="bg-white rounded-full md:h-96 md:w-96 h-44 w-44 bg-center bg-cover bg-bgme bg-no-repeat "
            variants={variants}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Start;
