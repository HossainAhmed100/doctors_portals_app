import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import UserBarLoder from "../../../../Components/UserLoding/UserBarLoder";
import { AuthContext } from "../../../../Contexts/AuthProvider";

function MyAppointment() {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const { data: bookings, isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <UserBarLoder />;
  }

  return (
    <div className="p-10">
      <h3 className="text-3xl mb-5">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Index</th>
              <th>Patient</th>
              <th>Treatment</th>
              <th>Appointment Date</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id} className="hover cursor-pointer">
                <th>{index + 1}</th>
                <td>{booking.patient}</td>
                <td>{booking.treatment}</td>
                <td>{booking.appointmentDate}</td>
                <td>{booking.slot}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointment;
