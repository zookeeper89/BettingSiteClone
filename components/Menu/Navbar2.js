import { Fragment, useState } from "react";

import Login from "components/Account/Login";
import DropdownLoggedIn from "components/Menu/Dropdowns/DropdownLoggedIn";
import Dropdown from "components/Menu/Dropdowns/Dropdown";
import CreateAccount from "components/Account/CreateAccount";
import ChangeLang from "components/Modals/ChangeLang";

import useUser from "utils/functions/user";
import Image from "next/image";
import { Modal, Button, Group, Select } from "@mantine/core";
import en from "locales/en";
import da from "locales/da";
import { Bars3Icon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { NavbarSearch } from "./NavSearch";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar(props) {
  const [openedLang, setOpenedLang] = useState(false);
  const router = useRouter();
  const user = useUser();
  const [loginbar, setLoginbar] = useState(props?.loginModal ?? false);
  const [createAccount, setCreateAccount] = useState(false);

  //Skift sprog
  const { locale } = router;
  const t = locale === "da" ? da : en;

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  console.log(user, "dahsd");

  return (
    <header
      className={`sticky top-0 z-50 grid grid-cols-6 bg-white border-b-0 md:border-b-2 xl:border-b-2 border-gray-200 p-4 px-10`}
    >
      <div className="relative items-center col-span-1 h-10 cursor-pointer my-auto hidden md:flex xl:flex">
        <Image src="/logosommerhus.png" width={40} height={40} alt="logo" />
      </div>

      <div className="flex items-center rounded-full py-2 md:shadow-sm col-span-4 md:col-span-3 xl:col-span-3">
        <NavbarSearch />
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-500   md:flex xl:flex col-span-2">
        <button onClick={() => setOpenedLang(true)} className="hover:shadow-xl">
          <GlobeAltIcon className="h-6 cursor-pointer " />
        </button>
        <Button
          size="lg"
          className="ml-4 bg-green-600 rounded-md text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 invisible md:visible"
        >
          Udlej sommerhus
        </Button>

        <div className="">
          {(() => {
            if (user?._id == null) {
              return (
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full transition ease-in-out hover:shadow-md cursor-pointer">
                  <Dropdown />
                </div>
              );
            } else {
              return (
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full transition ease-in-out hover:shadow-md cursor-pointer">
                  <DropdownLoggedIn />
                </div>
              );
            }
          })()}
        </div>
        {/* <div className="flex items-center space-x-2 border-2 p-2 rounded-full transition ease-in-out hover:shadow-md cursor-pointer">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div> */}
      </div>

      <Login loginbar={loginbar} setLoginbar={setLoginbar} />
      <CreateAccount loginbar={createAccount} setLoginbar={setCreateAccount} />
      <ChangeLang opened={openedLang} setOpened={setOpenedLang} />
    </header>
  );
}
