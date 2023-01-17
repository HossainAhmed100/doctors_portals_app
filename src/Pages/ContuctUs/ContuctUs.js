import React from "react";
import appointment from "../../assets/images/appointment.png";

function ContuctUs() {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="container py-20 mx-auto">
        <div className="text-center py-10">
          <p className="text-xl font-bold text-cyan-500">Contact Us</p>
          <h1 className="lg:text-5xl text-2xl text-white">
            Stay connected with us
          </h1>
        </div>
        <div className="flex flex-col p-4 m-auto space-y-5 items-center justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full lg:max-w-xs"
          />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full lg:max-w-xs"
          />
          <textarea
            className="textarea w-full lg:max-w-xs textarea-bordered"
            placeholder="Message"
          ></textarea>
          <button
            type="button"
            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 py-2 px-3 rounded-md duration-500 text-base font-medium text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContuctUs;
