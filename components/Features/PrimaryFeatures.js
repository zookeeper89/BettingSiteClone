import React from "react";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import Link from "next/link";

export default function PrimaryFeatures(props) {
  return (
    <div>
      <div className=" bg-[url(/landscape.jpg)] bg-cover bg-right mr-10 ml-10 mt-10 rounded-lg overflow-hidden ">
        <div className="bg-gradient-to-r from-[#09C3DB]">
          <div className="p-6 sm:p-14 sm:w-1/2">
            <h3 className="mb-4 text-3xl sm:text-4xl text-white">
              {props.title}
            </h3>
            <p className="mb-6 sm:mb-12 text-white">{props.text}</p>
            <a href="#">
              <button
                type="button"
                className="inline-flex bg-[#111827] justify-center select-none border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 
            py-3 px-8 text-white bg-brown hover:bg-brown-shade focus:ring-brown
                w-full sm:w-max"
              >
                <div className="flex items-center block">
                  <span className="inline-block text-white">
                    {props.buttontext}
                  </span>
                </div>
                {/* <img src="/norway.jpg" alt="" className="w-5 h-5 hidden" /> */}
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
