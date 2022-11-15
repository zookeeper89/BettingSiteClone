import { Autocomplete, Button, Select } from "@mantine/core";

export default function TopHero(props) {
  return (
    <main>
      <div
        className={`bg-cover bg-right sm:bg-right  lg:overflow-hidden ${props.className}`}
      >
        <div className={`${props.className2}`}>
          <div className="mx-auto max-w-7xl lg:px-8 ">
            <div className="">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0  lg:items-center">
                <div className="lg:py-24">
                  <div className=" rounded-xl   ">
                    <h1 className="mt-4 pb-3 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl sm:tracking-tight lg:mt-6 xl:text-6xl xl:tracking-tight">
                      <span className="block text-center">
                        {props.overtitle}
                      </span>

                      {/* <span class="block text-center  ">
                          preloved bil online
                          
                        </span> */}
                      <div className="pt-8">
                        <p className="line-1 anim-typewriter text-center">
                          {props.bottomtitle}
                        </p>
                      </div>
                    </h1>
                    <p className="mt-3 text-center text-white font-semibold text-base text- sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      {props.span}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
