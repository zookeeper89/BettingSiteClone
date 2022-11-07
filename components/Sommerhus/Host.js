import Image from "next/image";

const sommerhus = [
  {
    guests: "12",
    bedrooms: "3",
    beds: "6",
    bathrooms: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Host(props) {
  return (
    <>
      <div className="grid grid-cols-2 pt-5 pb-5">
        <div className="">
          <div>
            <h1 className="font-semibold text-xl">Sommerhus villekulla</h1>
          </div>
          <p className="font-medium text-gray-600">
            Gæster {sommerhus?.[0].guests} • Soveværelser {sommerhus?.[0].bedrooms} • Senge {sommerhus?.[0].beds} • Toiletter {sommerhus?.[0].bathrooms}
          </p>
          
        </div>
        <div className="flex justify-end">
          <img
            className="h-12 w-12 rounded-full"
            src={sommerhus?.[0].imageUrl}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
