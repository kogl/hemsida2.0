import React from "react";

const AboutText = () => {
  return (
    <div className="">
      <p className="md:w-4/5  text-justify py-4 px-8 text-about font-myfont text-darkgreen hidden md:block">
        Jag är en ambitiös och engagerad person med stor passion för
        programmering och webbutveckling. Jag har erfarenhet av både front-end
        och backend-utveckling.
      </p>
      <div className="text-sm font-myfont text-darkgreen sm:block md:hidden mb-4">
        Jag är en ambitiös och engagerad person med stor passion för
        programmering och webbutveckling. Jag har erfarenhet av både front-end
        och backend-utveckling.
      </div>
      <p className="md:w-4/5  text-justify py-4 px-8 text-about font-myfont text-darkgreen hidden md:block">
        Jag brinner för att lära mig nya saker, förbättra mina färdigheter och
        jag älskar få förvandla mina ideer och fantasier till verklighet
      </p>

      <div className="text-sm font-myfont text-darkgreen sm:block md:hidden mt-4">
        Jag brinner för att lära mig nya saker, förbättra mina färdigheter och
        jag älskar få förvandla mina ideer och fantasier till verklighet
      </div>
      <div className="px-8 md:font-myfont3 font-bold flex justify-start items-start text-md ">
        <h4>Kontakta Mig!</h4>
      </div>
    </div>
  );
};

export default AboutText;
