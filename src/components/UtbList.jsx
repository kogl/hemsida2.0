import React, { useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

const schoolInfo = [
  {
    id: 1,
    // place: "Jensen Yrekeshögskolan",
    place: "Jensen",
    // yrke: "Frontendutveckling o websäkerhet	",
    yrke: "Frontend websäkerhet	",

    points: [
      "- JavaScript-programmering ",
      "- Frontendutveckling",
      "-  Avancerad webbutveckling med JavaScript Paketering.",
      "- Vue,Node,HTML, CSS.",
    ],
  },
  {
    id: 2,
    place: "Lexicon",
    yrke: "Netutveckling",
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
    yrke: "It,  Kommunikation ...",
    points: ["- Samhällsprogram med IT inriktning  ."],
  },
];
const UtbList = () => {
  const [selectedObjekt, setSelectedObjekt] = useState(null);

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

      transition: {
        type: "spring",
        duration: scrollYProgress,
        delay: 0.3,
      },
    },
  };

  const handleObjektClick = (school) => {
    if (selectedObjekt === school) {
      setSelectedObjekt(null);
    } else {
      setSelectedObjekt(school);
    }
  };

  return (
    <div className="h-full w-screen flex-col flex  justify-center items-center">
      {schoolInfo.map((school) => (
        <motion.div
          className=" even:bg-lightgreen even:text-darkgreen  odd:bg-ljusrosa odd:text-darkpink  flex flex-col h-1/5 w-1/2 my-1 drop-shadow-2xl cursor-pointer "
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.8 }}
          variants={variants}
          key={school.id}
          ref={ref}
          onClick={() => handleObjektClick(school)}
        >
          <div className="px-3 flex-col flex ">
            <h3 className="font-myfont3 md:text-2xl px-2 pt-2">
              {school.place}
            </h3>
            <p className="font-myfont3 text-base md:text-lg py-0 px-2">
              {school.yrke}
            </p>
            <div className="px-3">
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
                  d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"
                />
              </svg>
            </div>
            {/* {selectedSchoolId === school.id ? "Dölj information" : "Visa mer"} */}
            {selectedObjekt === school && (
              <div className="objekt-innehåll">
                <p>neger</p>
              </div>
            )}

          </div>
          {/* ))} */}
        </motion.div>
      ))}
    </div>
  );
};

export default UtbList;
