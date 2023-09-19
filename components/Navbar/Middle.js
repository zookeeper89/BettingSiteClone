import React from "react";

function Middle() {
  const games = ["Sports", "In-play", "Casino", "Live Casino", "Poker", "Extra"];

  return (
    <div className="bg-[#333333] flex border-t-2 border-gray-700">
      <div className="flex gap-2 text-gray-400 text-sm ml-10">
        {games.map((mode) => (
          <p className="p-4 hover:text-white cursor-pointer">{mode}</p>
        ))}
      </div>
    </div>
  );
}

export default Middle;
