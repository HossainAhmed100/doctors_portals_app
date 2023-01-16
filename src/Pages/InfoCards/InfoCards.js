import React from "react";
import InfoCard from "../../Components/InfoCard/InfoCard";
import clockIcon from "../../assets/icons/clock.svg";
import mapIcon from "../../assets/icons/marker.svg";
import phoneIcon from "../../assets/icons/phone.svg";

function InfoCards() {
  const cardData = [
    {
      _id: 1,
      img: clockIcon,
      name: "Opening Hours",
      backgroundCl: "bg-gradient-to-r from-cyan-500 to-cyan-400",
      description: "Lorem Ipsum is simply dummy text of the pri",
    },
    {
      _id: 2,
      img: mapIcon,
      name: "Visit our location",
      backgroundCl: "bg-gray-800",
      description: "Brooklyn, NY 10036, United States",
    },
    {
      _id: 3,
      img: phoneIcon,
      name: "Contact us now",
      backgroundCl: "bg-gradient-to-r from-cyan-500 to-cyan-400",
      description: "+000 123 456789",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="py-20 m-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {cardData.map((card) => (
          <InfoCard key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default InfoCards;
