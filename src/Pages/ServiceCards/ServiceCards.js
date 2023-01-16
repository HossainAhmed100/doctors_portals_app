import React from "react";
import ServiceCard from "../../Components/ServiceCard.js/ServiceCard";
import cavity from "../../assets/images/cavity.png";
import fluoride from "../../assets/images/fluoride.png";
import whitening from "../../assets/images/whitening.png";

function ServiceCards() {
  const cardData = [
    {
      _id: 1,
      img: fluoride,
      name: "Fluoride Treatment",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 2,
      img: cavity,
      name: "Cavity Filling",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      _id: 3,
      img: whitening,
      name: "Contact us now",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="text-center py-10">
        <p className="text-base font-medium text-cyan-500">OUR SERVICES</p>
        <h1 className="text-xl text-gray-500">Services We Provide</h1>
      </div>
      <div className="py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cardData.map((cards) => (
          <ServiceCard key={cards._id} cards={cards} />
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
