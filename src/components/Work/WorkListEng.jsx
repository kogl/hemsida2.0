import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedWork, clearSelectedWork } from '../../redux/work';
import { motion, useScroll } from "framer-motion";

import workInfoEng from "./WorkInfoEng";




const variants = {
    offscreen: {
      opacity: 0,
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    onscreen: {
      scaleY: 1,
      opacity: 1,

      transition: {
        type: "spring",
        duration: 1,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };
const WorkListEng = () => {

const selectedWork = useSelector((state) => state.work.selectedWork);
const dispatch = useDispatch();

  const handleObjektClick = (work) => {
    if (selectedWork === work) {
      dispatch(clearSelectedWork());
    } else {
      dispatch(setSelectedWork(work));
    }
  };


  return (
    <div className="h-fit md:h-1/2 md:w-screen md:flex-row md:flex  justify-center items-center ">
      {workInfoEng.map((work) => (
        <motion.div
          className=" even:bg-lightgreen even:text-mediumgreen  odd:bg-white odd:text-gray-400  flex flex-row h-fit md:w-1/5 w-screen my-2 md:mx-5 drop-shadow-2xl cursor-pointer"
          key={work.id}
          onClick={() => handleObjektClick(work)}
		  variants={variants}
		  whileHover='hover'
        >
          <div className="px-3 flex-col flex ">
            <h3 className="font-myfont3 md:text- px-2 pt-2">{work.yrke}</h3>
            <p className="font-myfont3 text-base md:text-lg py-0 px-2">
              {work.place}
            </p>
            <div className="p-3 flex  justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 rotate-90 flex justify-center items-center"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                />
              </svg>
              {selectedWork === work && (
                <div className="  ">
                  {work.points.map((point) => (
                    <div className="" key={work.id}>
                      {point}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default WorkListEng;
