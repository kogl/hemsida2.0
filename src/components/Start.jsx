// import { React, useRef } from "react";
import { React } from "react";
// import Header from "./Header";
import {
  motion,
  useScroll,
  //   useSpring,
  //   useTransform,
  //   useMotionValue,
  //   useVelocity,
  //   useAnimationFrame,
} from "framer-motion";

// import "../animate.css";



const Start = () => {
  //   const [isAnimated, setIsAnimated] = useState(false);

  //   function handleAnimation() {
  //     setIsAnimated(!isAnimated);
  //   }
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
      className="flex flex-col h-max w-screen "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: false, amount: 0.8 }}
    >
      {/* <Header /> */}
      <div className="h-screen w-screen bg-brown-700 flex flex-row">
        <div className="bg-lightgreen h-screen w-screen justify-end items-end flex flex-col ">
          <div className="justify-center items-center flex-col flex text-vitt w-full h-2/5 font-myfont3 font-bold text-side drop-shadow-lg">
            {/* <h1 className=''>Design,</h1>
            <h1>Develop</h1>
            <h1>Deliver</h1> */}
          </div>
          <div className="w-full h-2/5 bg-vitt  justify-end items-center rounded-tl-full flex flex-col	"></div>
        </div>
        <div className="bg-lightgreen h-screen w-screen justify-center items-end flex">
          <div className="w-full h-2/5 bg-vitt  justify-end items-center rounded-tr-full flex flex-col	">
            <h1 className="font-myfont4  text-rubrik cursor-none">MER</h1>
            <h1 className="font-myfont4  text-rubrik mb-0 pb-0 cursor-none	">OM</h1>
            <motion.div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#18FFBD"
                className="w-16 h-16"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            
            </motion.div>
          </div>
        </div>

        <div className="bg-lightgreen h-screen w-screen flex justify-center items-center">
          <motion.div
            className="bg-white rounded-full h-96 w-96 bg-center bg-cover bg-bgme bg-no-repeat"
            variants={variants}
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Start;
