import React from "react";

export default function Rightbar() {
  const offers = [
    {
      name: "Cheap bonus",
      description: "Claim a free bet here.",
    },
    {
      name: "Bad Bonus",
      description: "Claim a bad bet here.",
    },
    {
      name: "Middle bonus",
      description: "Get 10 free spins.",
    },
    {
      name: "Incredibly good Bonus",
      description: "Free 10000000.",
    },
  ];

  return (
    <div className="bg-[#126E51]">
      <div className="text-center text-white font-semibold mb-10">
        <h1>Offers</h1>
      </div>
      <div className="space-y-10 ">
        {offers.map((offer, i) => (
          <div
            key={i}
            className="text-center mx-auto text-white border-2 rounded-xl p-5 mr-10 ml-10 hover:bg-white hover:text-black cursor-pointer"
          >
            <p className="font-semibold text-xl">{offer.name}</p>
            <p classname="">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
