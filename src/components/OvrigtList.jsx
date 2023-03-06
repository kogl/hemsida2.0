import React from "react";

const Skills = [
	{
	  id: 1,
	  name: "HTML5",
	  bild: "../img/frodo.jpg",
	  genre: "WEB",
	},
	{
	  id: 2,
	  name: "CSS",
	  bild: "../img/frodo.jpg",
	  genre: "Style",
	},
	{
	  id: 3,
	  name: "JavaScript",
	  bild: "../img/frodo.jpg",
	  genre: "WEB",
	},
	{
	  id: 4,
	  name: "SwiftIOS",
	  bild: "../img/frodo.jpg",
	  genre: "Other Programing",
	},
	{
	  id: 5,
	  name: "VueJS",
	  bild: "../img/frodo.jpg",
	  genre: "WEB",
	},
	{
	  id: 6,
	  name: "React",
	  bild: "../img/frodo.jpg",
	  genre: "WEB",
	},
	{
	  id: 7,
	  name: "Vuetify",
	  bild: "../img/frodo.jpg",
	  genre: "Style",
	},
	{
	  id: 8,
	  name: "Bootstrap",
	  bild: "../img/frodo.jpg",
	  genre: "Style",
	},
  
	{
	  id: 9,
	  name: "Blender",
	  bild: "../img/frodo.jpg",
	  genre: "Other",
	},
	{
	  id: 10,
	  name: "C#/.Net",
	  bild: "../img/frodo.jpg",
	  genre: "Other Programing",
	},
	{
	  id: 11,
	  name: "Adobepaketet",
	  bild: "../img/frodo.jpg",
	  genre: "Other",
	},
	{
	  id: 12,
	  name: "MSOffice",
	  bild: "../img/close.svg",
	  genre: "Other",
	},
	{
	  id: 13,
	  name: "Apple OS",
	  bild: "../img/frodo.jpg",
	  genre: "Other",
	},
	{
	  id: 14,
	  name: "ExpressJS",
	  bild: "../img/frodo.jpg",
	  genre: "Backend",
	},
	{
	  id: 15,
	  name: "NodeJS",
	  bild: "../img/frodo.jpg",
	  genre: "Backend",
	},
	{
	  id: 16,
	  name: "Tailwind",
	  bild: "../img/frodo.jpg",
	  genre: "Style",
	},
	{
	  id: 17,
	  name: "Figma",
	  bild: "../img/frodo.jpg",
	  genre: "Other",
	},
	{
	  id: 18,
	  name: "WindowsOS",
	  bild: "../img/frodo.jpg",
	  genre: "Other",
	},
	{
	  id: 19,
	  name: "iWork Suite",
	  bild: "../img/frodo.jpg",
	  genre: "Other",
	},
	{
	  id: 20,
	  name: "MongoDB",
	  bild: "../img/frodo.jpg",
	  genre: "Backend",
	},
	{
	  id: 21,
	  name: "ViteJS",
	  bild: "../img/frodo.jpg",
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
    <div className="">
      {Object.entries(genreMap).map(([genre, skills]) => (
        <div
          className="justify-center items-center flex flex-col text-myfont3 text-sm md:text-about mr-4"
          key={genre}
        >
          {/* <div className=" justify-center items-center flex flex-row text-myfont3 text-about" > */}
          {genre}
          {/* </div> */}
          {skills.map((skill) => (
            <div
              className=" flex flex-col mt-1 w-36 px-2 md:px-4 md:mt-2 md:h-16 md:w-36 justify-center items-center  even:bg-white even:text-gray-400  odd:bg-lightgreen  odd:text-darkgreen  font-myfont3 drop-shadow-2xl mx-0"
              key={genre}
            >
              {skill.name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default OvrigtList;
