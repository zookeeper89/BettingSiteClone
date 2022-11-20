import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";

const Rental = ({ title, image, price }) => {
  return (
    <div>
      <div className="relative">
        <div className="grad absolute w-full h-full rounded-b-[1.3rem]"></div>
        <div className="flex ">
          <img src={image} alt="" className="object-cover rounded-[1.3rem]" />
          <div className="absolute text-white font-bold bottom-6 left-6 text-[22px] flex gap-3 items-center">
            {title}
          </div>
        </div>
      </div>
      <div className="pt-3 flex justify-between">
        <div>
            <p>{title}</p>
          <p className="text-[18px] font-semibold"> {price},- pr. nat</p>
        </div>
        <div className="flex items-center space-x-1">
          <StarIcon className=" h-4 w-4" /> <p>5.0</p>
        </div>
      </div>
    </div>
  );
};

export default Rental;
