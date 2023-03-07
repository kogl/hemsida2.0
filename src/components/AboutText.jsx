import React from "react";

import {  useSelector } from "react-redux";
// import { setIsSwe } from "../redux/language";
const AboutText = () => {
//   const dispatch = useDispatch();
  const isSwe = useSelector((state) => state.language.isSwe);

  return (
    <div className="">
      {isSwe ? (
        <div className="">
          <p className="text-justify mb-4 md:w-4/5  md:py-4 md:px-8 text-sm  md:text-about font-myfont text-darkgreen">
            Jag är en ambitiös och engagerad person med stor passion för
            programmering och webbutveckling. Jag har erfarenhet av både
            front-end och backend-utveckling.
          </p>
          <p className="text-justify mb-4 md:w-4/5  md:py-4 md:px-8 text-sm  md:text-about font-myfont text-darkgreen">
            Jag brinner för att lära mig nya saker, förbättra mina färdigheter
            och jag älskar få förvandla mina ideer och fantasier till verklighet
          </p>
        </div>
      ) : (
        <div className="">
          <p className="text-justify mb-4 md:w-4/5  md:py-4 md:px-8 text-sm  md:text-about font-myfont text-darkgreen">
            I am an ambitious and dedicated person with a great passion for
            programming and web development. I have experience in both front-end
            and back-end development.
          </p>

          <p className="text-justify mb-4 md:w-4/5  md:py-4 md:px-8 text-sm  md:text-about font-myfont text-darkgreen">
            I am passionate about learning new things, improving my skills, and
            I love to turn my ideas and fantasies into reality.
          </p>
        </div>
      )}

      <div className="px-8 md:font-myfont3 font-bold flex justify-start items-start text-md ">
        {isSwe ? <h4>Kontakta Mig!</h4> : <h4>Contact Me!</h4>}
      </div>
    </div>
  );
};

// I am an ambitious and dedicated person with a great passion for programming and web development. I have experience in both front-end and back-end development.

// I am passionate about learning new things, improving my skills, and I love to turn my ideas and fantasies into reality.

export default AboutText;
