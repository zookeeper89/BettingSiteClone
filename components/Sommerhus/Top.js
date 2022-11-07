import { Button } from "@mantine/core";
import { IconShare, IconHeart } from "@tabler/icons";

export default function Top(props) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-2 mb-2 ">
          <div className="p-4 text-center md:text-left ">
            <h1 className="font-semibold text-2xl ">{props.name}</h1>
            <p className="text-gray-600 underline cursor-pointer">Aalborg, Danmark</p>
          </div>
          <div className="text-center p-4">
            <div className="text-center md:text-right">
              <Button
                className="bg-green-500 text-white hover:bg-green-600 mr-3"
                leftIcon={<IconShare color="white" />}
              >
                Del
              </Button>

              <Button
                className="bg-green-500 text-white hover:bg-green-600"
                leftIcon={<IconHeart color="white" />}
              >
                Favorit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
