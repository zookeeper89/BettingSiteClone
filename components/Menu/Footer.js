import Link from "next/link";
import { Modal, Button } from "@mantine/core";
import { useState } from "react";

export default function Footer(props) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="invisible sm:visible w-full">
      <footer className=" shadow p-2 bg-white">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center text-sm text-gray-400 space-x-2">
            <li className="flex">
              <a href="#" className="flex items-center  ">
                <img src="/logosommerhus.png" className="mr-3 h-8" alt="" />
              </a>
            </li>
            <li className="flex text-gray-500">© 2022 Sommer, Inc.</li>
            <li className="flex text-gray-500">•</li>
            <li className="flex text-gray-500 hover:underline cursor-pointer">
              Fortrolighed
            </li>
            <li className="flex text-gray-500">•</li>
            <li className="flex text-gray-500 hover:underline cursor-pointer">
              Vilkår
            </li>
            <li className="flex text-gray-500">•</li>
            <li className="flex text-gray-500 hover:underline cursor-pointer">
              Sitemap
            </li>
            <li className="flex text-gray-500">•</li>
            <li className="flex text-gray-500 hover:underline cursor-pointer">
              Virksomhedsoplysninger
            </li>
          </ul>

          <ul className="flex flex-wrap items-center text-sm text-gray-400">
            <li className="">
              <a
                href="#"
                className="mr-4 hover:underline  text-gray-500 flex items-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5   h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
                Sprog
              </a>
            </li>
            <li className="">
              <button onClick={() => setOpened(true)}>
                <a
                  href="#"
                  className="hover:underline text-gray-500 flex items-center"
                >
                  Support og ressourcecenter
                  {/* <ChevronUpIcon className="h-4 cursor-pointer hover:underline flex text-black ml-2 " /> */}
                </a>
              </button>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
