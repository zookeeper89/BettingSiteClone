import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Image } from "@mantine/core";
import Link from "next/link";

export default function SommerhusGallery() {
  const aalborg = "/byer/aalborg.jpg";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="">
        <div style={{ height: 500, display: "flex" }}>
          <Carousel withIndicators height="100%" sx={{ flex: 1 }}>
            <Carousel.Slide>
              <div className="w-full">
                <BackgroundImage src={aalborg} radius="sm">
                  <div className="">
                    <div className="p-6 sm:p-14 sm:w-1/2">
                      <button
                        type="button"
                        className="text-green-500 inline-flex bg-white justify-center select-none border border-transparent font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-slate-900 
            py-3 px-8  bg-brown hover:bg-brown-shade focus:ring-brown hover:text-white
                w-full sm:w-max"
                      >
                        <div className="flex items-center block">
                          <span className="inline-block ">Kontakt</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </BackgroundImage>
              </div>
            </Carousel.Slide>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
