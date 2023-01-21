import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentOptions from "./AppointmentOptions";
import BookingModal from "../BookingModal/BookingModal";
import { useQuery } from "@tanstack/react-query";
import UserBarLoder from "../../../Components/UserLoding/UserBarLoder";

function AvailableAppointments({ selectedDate }) {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, "PP");
  const {
    data: appointmentOptions,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["appointmentOptions", date],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/appointmentOptions?date=${date}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <UserBarLoder />;
  }

  return (
    <div className="container mx-auto py-20">
      {" "}
      <p className="text-center font-bold text-cyan-500 text-2xl">
        You Have Selected Date : {date}
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
          refetch={refetch}
          setTreatment={setTreatment}
        />
      )}
    </div>
  );
}

export default AvailableAppointments;
