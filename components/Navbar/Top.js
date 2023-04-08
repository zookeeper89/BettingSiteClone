import React from "react";
import { AiFillCrown } from "react-icons/Ai";

export default function Navbar() {
  return (
    <div className="bg-[#333333]">
      <div className="text-white flex justify-end text-sm p-2 ">
        <div className="mt-1 mr-1">
          <AiFillCrown />
        </div>
        Responsible Gambling
      </div>
    </div>
  );
}
