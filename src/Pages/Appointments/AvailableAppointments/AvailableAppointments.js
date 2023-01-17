import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOptions from "./AppointmentOptions";

function AvailableAppointments({ selectedDate }) {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .thne((data) => setAppointmentOptions(data));
  });
  return (
    <div className="container mx-auto">
      {" "}
      <p className="text-center font-bold text-3xl">
        You Have Selected Date : {format(selectedDate, "PP")}
      </p>
      <div>
        {appointmentOptions.map((options) => (
          <AppointmentOptions key={options._id} options={options} />
        ))}
      </div>
    </div>
  );
}

export default AvailableAppointments;
