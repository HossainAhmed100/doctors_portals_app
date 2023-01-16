import React from "react";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col p-10 items-start gap-4 justify-center">
      <p>{testimonial.description}</p>
      <div className="flex items-center gap-6 justify-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={testimonial.img} alt="" />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-medium text-gray-600">
            {testimonial.name}
          </h1>
          <h1 className="text-sm text-gray-600">{testimonial.address}</h1>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
