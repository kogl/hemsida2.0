import React from "react";

const Skills = [
  {
    id: 1,
    name: "HTML5",
    genre: "WEB",
  },
  {
    id: 2,
    name: "CSS",
    genre: "Style",
  },
  {
    id: 3,
    name: "JavaScript",
    genre: "WEB",
  },
  {
    id: 4,
    name: "SwiftIOS",
    genre: "Programing",
  },
  {
    id: 5,
    name: "VueJS",
    genre: "WEB",
  },
  {
    id: 6,
    name: "React",
    genre: "WEB",
  },
  {
    id: 7,
    name: "Vuetify",
    genre: "Style",
  },
  {
    id: 8,
    name: "Bootstrap",
    genre: "Style",
  },

  {
    id: 9,
    name: "Blender",
    genre: "Other",
  },
  {
    id: 10,
    name: "C#/.Net",
    genre: "Programing",
  },
  {
    id: 11,
    name: "Adobepaketet",
    genre: "Other",
  },
  {
    id: 12,
    name: "MSOffice",
    genre: "Other",
  },
  {
    id: 13,
    name: "Apple OS",
    genre: "Other",
  },
  {
    id: 14,
    name: "ExpressJS",
    genre: "Backend",
  },
  {
    id: 15,
    name: "NodeJS",
    genre: "Backend",
  },
  {
    id: 16,
    name: "Tailwind",
    genre: "Style",
  },
  {
    id: 17,
    name: "Figma",
    genre: "Other",
  },
  {
    id: 18,
    name: "WindowsOS",
    genre: "Other",
  },
  {
    id: 19,
    name: "iWork Suite",
    genre: "Other",
  },
  {
    id: 20,
    name: "MongoDB",
    genre: "Backend",
  },
  {
    id: 21,
    name: "ViteJS",
    genre: "WEB",
  },
  {
    id: 22,
    name: "Redux",
    genre: "WEB",
  },
];

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
