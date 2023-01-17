import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOptions from "./AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";

function AvailableAppointments({ selectedDate }) {
  const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("appointmentOptions.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOptions(data));
  });
  return (
    <div className="container mx-auto py-20">
      {" "}
      <p className="text-center font-bold text-cyan-500 text-2xl">
        You Have Selected Date : {format(selectedDate, "PP")}
      </p>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {appointmentOptions.map((options) => (
          <AppointmentOptions
            key={options._id}
            setStatement={setTreatment}
            options={options}
          />
        ))}
      </div>
      {treatment && (
        <BookingModal
          selectedDate={selectedDate}
          treatment={treatment}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
}

export default AvailableAppointments;
