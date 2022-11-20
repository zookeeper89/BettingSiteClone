import React from "react";
import Rental from "components/Rental";

export default function Rentals() {
  const rentals = [
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
    {
      title: "Løkken, Danmark",
      image: "byer/aalborg.jpg",
      price: "1,234",
    },
  ];

  return (
    <>
      <div className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {rentals.map((rental) => (
            <Rental
              title={rental.title}
              image={rental.image}
              price={rental.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
