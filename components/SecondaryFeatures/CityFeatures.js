import { Divider, Image } from "@mantine/core";

import Link from "next/link";

export default function TopHero(props) {
  return (
    <>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" bg-[url(/byer/københavn.jpg)] bg-cover bg-right m-3 rounded-lg overflow-hidden p-20 cursor-pointer opacity-1 transition-opacity hover:opacity-70">
            <div className="">
              <div className="">
                <h3 className="text-center text-white font-bold text-2xl">
                  København
                </h3>
              </div>
            </div>
          </div>
          <div className=" bg-[url(/byer/aarhus.jpg)] bg-cover bg-right m-3 rounded-lg overflow-hidden p-20 cursor-pointer opacity-1 transition-opacity hover:opacity-70">
            <div className="">
              <div className="">
                <h3 className="text-center text-white font-bold text-2xl">
                  Århus
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className=" bg-[url(/byer/esbjerg.jpg)] bg-cover bg-right m-3 rounded-lg overflow-hidden p-20 cursor-pointer opacity-1 transition-opacity hover:opacity-70">
            <div className="">
              <div className="">
                <h3 className="text-center text-white font-bold text-2xl">
                  Esbjerg
                </h3>
              </div>
            </div>
          </div>
          <div className=" bg-[url(/byer/randers.jpg)] bg-cover bg-right m-3 rounded-lg overflow-hidden p-20 cursor-pointer opacity-1 transition-opacity hover:opacity-70">
            <div className="">
              <div className="">
                <h3 className="text-center text-white font-bold text-2xl">
                  Randers
                </h3>
              </div>
            </div>
          </div>
          <div className=" bg-[url(/byer/kolding.jpg)] bg-cover bg-right m-3 rounded-lg overflow-hidden p-20 cursor-pointer opacity-1 transition-opacity hover:opacity-70">
            <div className="">
              <div className="">
                <h3 className="text-center text-white font-bold text-2xl">
                  Kolding
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className=" bg-[url(/byer/odense.jpg)] bg-cover bg-right m-3 rounded-lg overflow-hidden p-20 cursor-pointer opacity-1 transition-opacity hover:opacity-70">
            <div className="">
              <div className="">
                <h3 className="text-center text-white font-bold text-2xl">
                  Odense
                </h3>
              </div>
            </div>
          </div>
          <div className=" bg-[url(/byer/aalborg.jpg)] bg-cover bg-right m-3 rounded-lg overflow-hidden p-20 cursor-pointer opacity-1 transition-opacity hover:opacity-70">
            <div className="">
              <div className="">
                <h3 className="text-center text-white font-bold text-2xl">
                  Aalborg
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
