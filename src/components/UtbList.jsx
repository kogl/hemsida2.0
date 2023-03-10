import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";	
import { useDispatch, useSelector } from "react-redux";

import { setSelectedUtb, clearSelectedUtb } from "../redux/utb";

// const eng = [
//   {
//     id: 1,
//     place: "Jensen",
//     yrke: "hata aik ",
//     points: [
//       "- JavaScript-programmering ",
//       "- Frontendutveckling",
//       "- Avancerad webbutveckling med JavaScript Paketering.",
//       "- Vue,Node,HTML, CSS.",
//     ],
//   },
// ];

const schoolInfo = [
  {
    id: 1,
    place: "Jensen",
    yrke: "Frontend websäkerhet",
    points: [
      "- JavaScript-programmering ",
      "- Frontendutveckling",
      "- Avancerad webbutveckling med JavaScript Paketering.",
      "- Vue,Node,HTML, CSS.",
    ],
  },
  {
    id: 2,
    place: "Lexicon",
    yrke: ".Netutveckling",
    // desc: "hata ajk",
    points: [
      "- Applikationsutveckling",
      "- Git versionshantering",
      "- C#/.NET .",
      "- Introduktion till ASP.NET MVC",
      "- Objektorienterad C#",
    ],
  },
  {
    id: 3,
    // place: "Nackademin Yrekeshögskola",
    place: "Nackademin",
    yrke: "Appliktionsutveckling",
    points: [
      "- Appliktionsutveckling med Swift?IOS.",
      "- Scrum.",
      "- HTML, JS, CSS.",
    ],
  },
  {
    id: 4,
    place: "Södertörns",
    // place: "Södertörns Högskola",
    yrke: "Medieteknik A & B",
    points: [
      "- Foto och fotoredigering med adobe photoshopr  .",
      "- Layout med adobe illustratorr ",
      "- Videoredigering med adobe premiere och aftereffectr ",
    ],
  },
  {
    id: 5,
    place: "Örebro Universitet",
    yrke: "Media Design",
    points: ["- Filmskapande  .", "- Kortfilm,Musikvideor ", "- Ljudläggning "],
  },
  {
    id: 6,
    place: "Infokomp",
    // yrke: "It, Kommunikation och Ledarskap(Gymnasiet)",
    yrke: "IT &  Kommunikation ...",
    points: ["- Samhällsprogram med IT inriktning  ."],
  },
];

const UtbList = () => {
  const dispatch = useDispatch();
  const selectedUtb = useSelector((state) => state.utb.selectedUtb);

  const handleObjektClick = (utb) => {
    if (selectedUtb === utb) {
      dispatch(clearSelectedUtb());
    } else {
      dispatch(setSelectedUtb(utb));
    }
  };

  //   const isSwe = useSelector((state) => state.language.isSwe);

  // : [
  //     {
  //       id: 1,
  //       place: "Jensen",
  //       yrke: "Frontend web security",
  //       points: [
  //         "- JavaScript programming",
  //         "- Front-end development",
  //         "- Advanced web development with JavaScript packaging.",
  //         "- Vue, Node, HTML, CSS.",
  //       ],
  //     },
  //     {
  //       id: 2,
  //       place: "Lexicon",
  //       yrke: ".NET development",
  //       points: [
  //         "- Application development",
  //         "- Git version control",
  //         "- C#/.NET",
  //         "- Introduction to ASP.NET MVC",
  //         "- Object-oriented C#",
  //       ],
  //     },
  //     {
  //       id: 3,
  //       place: "Nackademin",
  //       yrke: "Application Development",
  //       points: [
  //         "- Application development with Swift/iOS.",
  //         "- Scrum.",
  //         "- HTML, JS, CSS.",
  //       ],
  //     },
  //     {
  //       id: 4,
  //       place: "Södertörns",
  //       yrke: "Media Technology A & B",
  //       points: [
  //         "- Photo and photo editing with Adobe Photoshop.",
  //         "- Layout with Adobe Illustrator.",
  //         "- Video editing with Adobe Premiere and After Effects.",
  //       ],
  //     },
  //     {
  //       id: 5,
  //       place: "Örebro University",
  //       yrke: "Media Design",
  //       points: [
  //         "- Film making.",
  //         "- Short films, music videos.",
  //         "- Sound design.",
  //       ],
  //     },
  //     {
  //       id: 6,
  //       place: "Infokomp",
  //       yrke: "IT & Communication ...",
  //       points: ["- Social Science Program with IT focus."],
  //     },
  //   ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ container: ref });

  const variants = {
    offscreen: {
      opacity: 0,
      transition: {
        type: "spring",
        duration: scrollYProgress,
      },
    },
    onscreen: {
      scaleY: 1,
      opacity: 1,
	  zIndex: 1,

      transition: {
        type: "spring",
        duration: scrollYProgress,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        yoyo: Infinity,
		zIndex: 100,

      },
    },
  };

  

  return (
    <div className="h-fit w-screen flex-col flex justify-center items-center">
      {schoolInfo.map((school) => (
        <motion.div
          className=" even:bg-lightgreen even:text-darkgreen  odd:bg-white odd:text-gray-400  flex flex-col h-fit w-screen md:w-1/2 my-1 drop-shadow-2xl cursor-pointer "
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={variants}
		  whileHover='hover'
          key={school.id}
          ref={ref}
          onClick={() => handleObjektClick(school)}
        >
          <div className="px-3 flex flex-col my-1">
            <h3 className="font-myfont3 md:text-2xl px-2 pt-2">
              {school.place}
            </h3>
            <p className="font-myfont3 text-base md:text-lg py-0 px-2">
              {school.yrke}
            </p>
            <div className="px-3 pb-2 flex justify-center rotate-90">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                />
              </svg>
            </div>

            {selectedUtb === school && (
              <div className="h-fit px-4 z-10">
                {school.points.map((point) => (
                  <div className="" key={school.id}>
                    {point}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default UtbList;
