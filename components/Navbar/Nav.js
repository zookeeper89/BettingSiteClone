import { Button, Modal } from "@mantine/core";
import Create from "components/Modal/Create";
import Login from "components/Modal/Login";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Sports", href: "#" },
  { name: "In-play", href: "#" },
];

export default function Example() {
  const [opened, setOpened] = useState(false);
  const [openedCreate, setOpenedCreate] = useState(false);
  return (
    <header className="bg-[#126E51]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-auto" src="logotrans.png" alt="" />
            </Link>
            <div className="ml-10 hidden space-x-8 lg:block">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-white hover:text-indigo-50"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <Button
              onClick={setOpenedCreate}
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-black hover:bg-opacity-75"
            >
              Create
            </Button>
            <Button
              onClick={setOpened}
              className="inline-block rounded-md border border-transparent bg-white py-2 px-4 text-base font-medium text-black hover:bg-indigo-50"
            >
              Login
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </nav>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Login"
        size={"xl"}
      >
        <Login />
      </Modal>
      <Modal
        opened={openedCreate}
        onClose={() => setOpenedCreate(false)}
        title="Create"
        size={"xl"}
      >
        <Create />
      </Modal>
    </header>
  );
}
