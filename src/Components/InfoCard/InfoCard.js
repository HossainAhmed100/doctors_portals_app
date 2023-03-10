import React from "react";

function InfoCard({ card }) {
  return (
    <div
      className={`w-full flex md:flex-row flex-col  items-center m-auto justify-items-stretch gap-8 p-6 shadow-xl rounded-xl ${card.backgroundCl}`}
    >
      <img src={card.img} alt="" />
      <div className="text-center md:text-start">
        <h1 className="text-lg text-white font-medium">{card.name}</h1>
        <p className="text-sm text-white">{card.description}</p>
      </div>
    </div>
  );
}

export default InfoCard;
