import React from "react";
import Bannerpng from "../../assets/images/chair.png";
import Treatment from "../../assets/images/treatment.png";
import InfoCards from "../InfoCards/InfoCards";
import ServiceCards from "../ServiceCards/ServiceCards";

function Home() {
  return (
    <div>
      <div className="hero py-20 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={Bannerpng}
            className="max-w-xl rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Your New Smile Starts
              <br />
              Here
            </h1>
            <p className="py-6 w-3/4">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
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
      <InfoCards />
      <ServiceCards />
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={Treatment}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div className="w-2/4 ml-8">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
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
    </div>
  );
}

export default Home;
