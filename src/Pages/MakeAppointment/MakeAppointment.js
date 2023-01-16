import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";

function MakeAppointment() {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
    >
      <div className="hero w-full">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctor} className="-mt-32 w-2/4" alt="" />
          <div className="lg:w-2/4 py-10 lg:ml-8 sm:m-auto">
            <h1 className="text-base text-cyan-500 py-4 font-bold">
              Appointment
            </h1>
            <h1 className="lg:text-5xl text-3xl text-white font-bold">
              Make an appointment Today
            </h1>
            <p className="py-6 text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <button
              type="button"
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 py-2 px-3 rounded-md duration-500 text-base font-medium text-white"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MakeAppointment;
