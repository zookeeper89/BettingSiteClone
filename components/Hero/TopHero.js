import { Autocomplete, Button, Select } from "@mantine/core";

export default function TopHero(props) {
  return (
    <main>
      <div className="pt-10 bg-green-600 bg-cover bg-right sm:bg-right pb-24 mb-10 md:pb-16 sm:pt-16 sm:pb-16 lg:pt-8 lg:pb-24 lg:overflow-hidden m-0 md:m-10 lg:m-10  md:rounded-3xl ">
        <div className="">
          <div className="mx-auto max-w-7xl lg:px-8 ">
            <div className="">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:flex lg:items-center">
                <div className="lg:py-24">
                  <div className=" rounded-xl   ">
                    <h1 className="mt-4 pb-3 text-4xl tracking-tight font-bold text-white sm:mt-5 sm:text-6xl sm:tracking-tight lg:mt-6 xl:text-6xl xl:tracking-tight">
                      <span className="block text-center">
                        Saml hele familien til
                      </span>

                      {/* <span class="block text-center  ">
                          preloved bil online
                          
                        </span> */}
                      <div className="pt-8">
                        <p className="line-1 anim-typewriter text-center">
                          en miniferie
                        </p>
                      </div>
                    </h1>
                    <p className="mt-3 text-center text-white font-semibold text-base text- sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                     Få 20% rabat med koden Sommer
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
