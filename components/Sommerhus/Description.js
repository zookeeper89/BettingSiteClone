import { IconShare, IconHeart } from "@tabler/icons";
import { useState } from "react";
import { Modal, Button, Group } from "@mantine/core";

const links = [
  {
    text: " ur adipiscing elit, sed do eiu ur adipiscing elit, sed do eiu ur adipiscing elit, sed do eiuur adipiscing elit, sed do eiuLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

export default function Facilities(props) {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <div className="">
        <div className="text-2xl font-semibold pt-4 pb-2 mt-8">
          <h1>Om sommerhuset</h1>
        </div>
        <div className="overflow-hidden max-h-40">
          <p>{links[0].text}</p>
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
              Læs mere
            </Button>
            </div>
        </div>
      </div>
    </>
  );
}
