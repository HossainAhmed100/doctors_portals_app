import React from "react";

function ServiceCard({ cards }) {
  return (
    <div className=" flex flex-col items-center justify-center m-auto text-center gap-4 p-6">
      <img src={cards.img} alt="" />
      <h1 className="text-lg text-gray-600 font-medium">{cards.name}</h1>
      <p className="text-sm text-gray-400">{cards.description}</p>
    </div>
  );
}

export default ServiceCard;
