import React from "react";

const games = [
  {
    title: "Sports",
  },
  {
    title: "In-play",
  },
  {
    title: "Casino",
  },
  {
    title: "Live Casino",
  },
  {
    title: "Poker",
  },
  {
    title: "Extra",
  },
];

export default function Middle() {
  return (
    <div className="bg-[#333333] flex border-t-2 border-gray-700">
      <div className="flex gap-2 text-gray-400 text-sm ml-10 ">
        {games.map((modes) => (
          <div>
            <div className="p-4 hover:text-white cursor-pointer">
              {modes.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
