import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

const svgPathVariants = {
  start: {
    opacity: 1,
    pathLength: 1,
  },
  end: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 1.8,
      ease: "easeInOut",
      yoyo: Infinity,
    },
  },
};

const Kontakt = () => {
  const isSwe = useSelector((state) => state.language.isSwe);

  return (
    <div className="h-fit w-screen bg-white flex-row">
      <div
        className="text-svart h-screen w-screen justify-evenly items-center flex flex-row text-center md:bg-wave4 md:bg-no-repeat md:bg-cover "
        id="kontakt"
      >
        <div className="cursor-none">
          {isSwe ? (
            <p className="text-liten md:text-rubrik font-myfont4 ">Kontakt</p>
          ) : (
            <p className="text-liten md:text-rubrik font-myfont4 ">Contact</p>
          )}
        </div>

        <div className=" flex-col w-1/2 ">
          {/* {isSwe ? (
            <div className="text-xl font-myfont2 ">Kontakta mig!</div>
          ) : (
            <div className="text-xl font-myfont2 ">Contact Me</div>
          )} */}

          <div className="flex flex-row justify-evenly ">
            <a href="tel:+46707123901">
              <div className="bg-vitt rounded-full px-2 py-2 mr-2 cursor-pointer">
                <motion.svg
                  variants={buttonVariants}
                  whileHover="hover"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="42"
                  height="42"
                >
                  <motion.path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </motion.svg>
              </div>
            </a>
            <a mail="oskar@oskarljungdahl.se">
              <motion.div
                className="bg-vitt rounded-full px-2 py-2 mr-2 cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  width="42"
                  height="42"
                >
                  <motion.path
                    variants={svgPathVariants}
                    initial="start"
                    animate="end"
                    whileHover="end"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
              </motion.div>
            </a>
            <a href="https://github.com/kogl" target="_blank">
              <motion.div
                className="bg-vitt rounded-full px-2 py-2 mr-2 cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
              >
                <svg
                  aria-hidden="true"
                  className="octicon octicon-mark-github"
                  height="42"
                  version="1.1"
                  viewBox="0 0 16 16"
                  width="42"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  ></path>
                </svg>
              </motion.div>
            </a>
            <a
              href="https://www.linkedin.com/in/oskar-ljungdahl-503037137/"
              target="_blank"
            >
              <motion.div
                className="bg-vitt rounded-full px-2 py-2 mr-2 cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
