import React from "react";

export default function Featured() {
  const games = [
    {
      team1: "Real Madrid",
      team2: "Bercelona",
      odds1: "1.20",
      odds2: "1.64",
      odds3: "2.21",
    },
    {
      team1: "Denmark",
      team2: "Spain",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Real Madrid",
      team2: "Bercelona",
      odds1: "1.20",
      odds2: "1.64",
      odds3: "2.21",
    },
    {
      team1: "Denmark Fc",
      team2: "Spain ",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "FC Dubai",
      team2: "Portugal",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Real Madrid",
      team2: "Bercelona",
      odds1: "1.20",
      odds2: "1.64",
      odds3: "2.21",
    },
    {
      team1: "Denmark",
      team2: "Spain",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Real Madrid",
      team2: "Bercelona",
      odds1: "1.20",
      odds2: "1.64",
      odds3: "2.21",
    },
    {
      team1: "Denmark",
      team2: "Spain",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Dubai",
      team2: "Portugal",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Real Madrid",
      team2: "Bercelona",
      odds1: "1.20",
      odds2: "1.64",
      odds3: "2.21",
    },
    {
      team1: "Denmark",
      team2: "Spain",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Real Madrid",
      team2: "Bercelona",
      odds1: "1.20",
      odds2: "1.64",
      odds3: "2.21",
    },
    {
      team1: "Denmark",
      team2: "Spain",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Dubai",
      team2: "Portugal",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Real Madrid",
      team2: "Bercelona",
      odds1: "1.20",
      odds2: "1.64",
      odds3: "2.21",
    },
    {
      team1: "Denmark",
      team2: "Spain",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Real Madrid",
      team2: "Bercelona",
      odds1: "1.20",
      odds2: "1.64",
      odds3: "2.21",
    },
    {
      team1: "Denmark",
      team2: "Spain",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
    {
      team1: "Dubai",
      team2: "Portugal",
      odds1: "1.65",
      odds2: "1.64",
      odds3: "2.11",
    },
  ];

  return (
    <div className="bg-[#126E51]">
      <div className="grid grid-cols-3">
        {games.map((game) => (
          <div className="p-10">
            <div className="text-white font-semibold texl-md text-center">
              {game.team1} - {game.team2}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-center text-white border-2 rounded-xl font-semibold cursor-pointer">
              <div className="border-r-2 hover:bg-white rounded-l-md hover:text-black">
                <p>1</p>
                <p>{game.odds1}</p>
              </div>
              <div className="border-r-2 hover:bg-white  hover:text-black">
                <p>X</p>
                <p>{game.odds2}</p>
              </div>
              <div className=" hover:bg-white rounded-r-md hover:text-black">
                <p>2</p>
                <p>{game.odds3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
