import React from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import Bannerpng from "../../../assets/images/chair.png";

function AppointmentBanner({ selectedDate, setSelectedDate }) {
  return (
    <div>
      <div className="hero py-20 bg-base-200">
        <div className="hero-content flex-col gap-8 lg:flex-row-reverse">
          <img
            src={Bannerpng}
            className="lg:max-w-xl md:lg:max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
            <p>You Have Selected Date : {format(selectedDate, "PP")}</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default AppointmentBanner;
