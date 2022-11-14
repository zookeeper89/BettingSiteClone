import { Image } from '@mantine/core';


export default function SommerhusGallery(props) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 ">
          <div className="">
            <Image src="https://place.dog/300/200"  radius="xl" width={500} height={500}/>
          </div>
          <div className="grid grid-cols-2">
            <div><Image src="https://place.dog/300/200" radius="xl" width={250} height={250}/></div>
            <div><Image src="https://place.dog/300/200" radius="xl" width={250} height={250}/></div>
            <div><Image src="https://place.dog/300/200" radius="xl" width={250} height={250}/></div>
            <div><Image src="https://place.dog/300/200" radius="xl" width={250} height={250}/></div>
          </div>
        </div>
      </div>
    </>
  );
}
