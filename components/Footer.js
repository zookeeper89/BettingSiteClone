import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-black">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex">
        <p className="text-white p-10 font-semibold">
          Our mega cool bettingsite
        </p>
        <div className="flex text-white p-10 font-semibold ml-96 space-x-4">
          <Link href="/">
            <p>Frontpage</p>
          </Link>
          <Link href="/about"> 
            <p>About</p>
          </Link>
          <p>Live bets</p>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
