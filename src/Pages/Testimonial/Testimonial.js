import React from "react";
import quits from "../../assets/icons/quote.svg";
import avatar from "../../assets/images/people1.png";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard";

function Testimonial() {
  const testimonialData = [
    {
      _id: 1,
      img: avatar,
      address: "California",
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      img: avatar,
      address: "California",
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      img: avatar,
      address: "California",
      name: "Winson Herry",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex p-8 items-center justify-between">
          <div>
            <h4 className="text-cyan-500 txet-base font-bold">Testimonial</h4>
            <h4 className="text-gray-500 mt-2 lg:text-5xl text-2xl">
              What Our Patients Says
            </h4>
          </div>
          <img className="lg:w-44 w-20" src={quits} alt="" />
        </div>
        <div className="py-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {testimonialData.map((testimonial) => (
            <TestimonialCard key={testimonial._id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
