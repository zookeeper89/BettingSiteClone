import { IconShare, IconHeart } from "@tabler/icons";
import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";
import { BeakerIcon } from "@heroicons/react/24/solid";

const links = [
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
  {
    text: "Toilet",
    icon: BeakerIcon,
  },
  {
    text: "Tv",
    icon: BeakerIcon,
  },
  {
    text: "Køkken",
    icon: BeakerIcon,
  },
];

export default function Facilities(props) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className="">
        <div className="text-2xl font-semibold pt-4 pb-2 mt-8">
          <h1>Faciliteter</h1>
        </div>
        <div className="overflow-hidden max-h-40">
          
            <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-3">
            {links.map((item, i) => (
              <div className="text-sm font-semibold flex mt-2" key={i}>
                <item.icon className="h-5 w-5 mr-2 text-black" />
                {item.text}
              </div>
            ))}
          </div>
        
        </div>
        <div className="pt-4 pb-4">
          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Introduce yourself!"
          >
            {/* Modal content */}
          </Modal>

          <div className="text-center md:text-left">
            <Button
              className="bg-green-400 hover:bg-green-500 "
              onClick={() => setOpened(true)}
            >
              Se alle faciliteter
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
