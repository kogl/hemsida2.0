import React from "react";
import Skills from './Skills'


const OvrigtList = () => {
  const genreMap = Skills.reduce((acc, skill) => {
    if (!acc[skill.genre]) {
      acc[skill.genre] = [];
    }
    acc[skill.genre].push(skill);
    return acc;
  }, {});

  return (
    <div className="md:grid md:grid-cols-3 gap-2 justify-start items-start">
      {Object.entries(genreMap).map(([genre, skills]) => (
        <div
          className="justify-center items-center flex flex-col text-myfont3 text-sm md:text-about md:mr-4"
          key={genre}
        >
          <p className="text-white bg-black md:px-4 md:py-2">{genre}</p>
          {skills.map((skill) => (
            <div
              className=" flex flex-col mt-1 w-36 px-2 md:px-4 md:mt-2 md:h-16 md:w-40 justify-center items-center  even:bg-white even:text-gray-400  odd:bg-lightgreen  odd:text-darkgreen  font-myfont3 drop-shadow-2xl mx-0"
              key={genre}
            >
              <p className="text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OvrigtList;
