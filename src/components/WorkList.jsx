import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedWork, clearSelectedWork } from '../redux/work';

// import React, { useState } from "react";

const workInfo = [
  {
    id: 1,
    place: "Provoice",
    yrke: "Telefonsäljare	",
    besk: "Jag har erfarenhet av att arbeta som telefonsäljar utvecklat mina färdigheter för att sälja olika produkter till privatpersoner. Genom att hålla utbildningar med nya säljare har jag även tränat andra i försäljning och utvecklat färdigheter för att planera och leverera effektiva träningsprogram.",
    points: [
      "- Sålde olika produkter till privatpersoner ",
      "- höll utbildningar med nya säljare ",
      "- Åretssäljare två gånger.",
    ],
  },
  {
    id: 2,
    place: "Extend",
    yrke: "Annonssäljare",
    besk: "Under min tid på Extend har jag utvecklat färdigheter för att bygga och underhålla kundrelationer, samt identifiera och förmedla kunders behov och utforma en kampanj som matchar deras mål och önskemål. Sätta upp och uppnå försäljningsmål, förhandla och stänga affärer på ett effektivt sätt samt bygga goda kundrelationer",
    points: [
      "- Sålde annosner på Bonnierkoncernens nättidningar till olika företag(Dagens Nyhter,Dagens Industri,Expressen)",
      "- Bygga nya och underhålla kundrelationer.",
      "- Se och förmedla kundersbehov och utforma en kamapnj .",
    ],
  },
  {
    id: 4,
    place: "Gimp AB",
    yrke: "Lagermedarbetare",
    besk: "Jag har erfarenhet av att utföra fysiskt arbete, inklusive lyftning och flyttning av föremål. Dessutom har jag utvecklat färdigheter inom organisering och har erfarenhet av att hålla ordning på lagerlokalen och varulagren.",
    points: [
      "- Fysiskt arbete ",
      "- Organisering - att kunna organisera och hålla ordning på lagerlokalen och varulagren.",
    ],
  },
  {
    id: 3,
    place: "AbbaHaircare",
    yrke: "Säljare",
    besk: " Jag har erfarenhet av att sälja saxar och andra frisörprodukter till olika frisörsalonger. Under min tid på företaget har jag utvecklat färdigheter för att söka upp nya kunder och demonstrera olika typer av produkter för dem",
    points: [
      "- Försäljnig av saxar och andra frisörprodukter till olika frisörsalonger  .",
      "- Söka upp nya kunder och demostreara olika typer av produkter ",
    ],
  },
  {
    id: 5,
    place: "ITMaskinen",
    yrke: "Praktik",
    besk: "....",
    points: [
      "- Försäljnig av saxar och andra frisörprodukter till olika frisörsalonger  .",
      "- Söka upp nya kunder och demostreara olika typer av produkter ",
    ],
  },
  {
    id: 6,
    place: "WX3",
    yrke: "Praktik",
    besk: "....",
    points: [
      "- Försäljnig av saxar och andra frisörprodukter till olika frisörsalonger  .",
      "- Söka upp nya kunder och demostreara olika typer av produkter ",
    ],
  },
  {
    id: 7,
    place: "VattenInfo",
    yrke: "Praktik",
    besk: "....",
    points: [
      "- Försäljnig av saxar och andra frisörprodukter till olika frisörsalonger  .",
      "- Söka upp nya kunder och demostreara olika typer av produkter ",
    ],
  },
];
const WorkList = () => {
//   const [selectedWork, setSelectedWork] = useState(null);
//   const handleObjektClick = (work) => {
//     if (selectedWork === work) {
//       setSelectedWork(null);
//     } else {
//       setSelectedWork(work);
//     }
//   };

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
      {workInfo.map((work) => (
        <div
          className=" even:bg-lightgreen even:text-mediumgreen  odd:bg-white odd:text-gray-400  flex flex-row h-fit md:w-1/5 w-screen my-2 md:mx-5 drop-shadow-2xl cursor-pointer"
          key={work.id}
          onClick={() => handleObjektClick(work)}
        >
          <div className="px-3 flex-col flex ">
            <h3 className="font-myfont3 md:text- px-2 pt-2">{work.yrke}</h3>
            <p className="font-myfont3 text-base md:text-lg py-0 px-2">
              {work.place}
            </p>
            <div className="p-3 flex flex-col">
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
        </div>
      ))}
    </div>
  );
};

export default WorkList;
