import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { RiCloseFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import UserBarLoder from "../../../../Components/UserLoding/UserBarLoder";
import { AuthContext } from "../../../../Contexts/AuthProvider";

function MyAppointment() {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteAppointment = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `http://localhost:5000/bookings/${id}`;
        fetch(url, {
          method: "DELETE",
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        })
          .then((res) => res.json())
          .then((deletedata) => {
            if (deletedata.acknowledged) {
              Swal.fire(
                "Deleted!",
                "Appointment has been Canceled.",
                "success"
              );
              refetch();
            }
          });
      }
    });
  };

  if (isLoading) {
    return <UserBarLoder />;
  }

  return (
    <div className="p-10">
      <h3 className="text-3xl mb-5 text-center">My Appointments</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                Index <div className="badge ml-1">{bookings.length}</div>
              </th>
              <th>Patient</th>
              <th>Treatment</th>
              <th>Appointment Date</th>
              <th>Time</th>
              <th>Price</th>
              <th>PAYMENT</th>
              <th>Action</th>
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
                <td>{booking.price}$</td>
                <td>
                  {!booking.paid ? (
                    <Link to={`/dashboard/payment/${booking._id}`}>
                      <button className="btn btn-sm btn-primary">
                        pay now{" "}
                        <RiMoneyDollarCircleLine className="ml-1" size={20} />
                      </button>
                    </Link>
                  ) : (
                    <button className="btn btn-sm btn-primary">
                      Paid{" "}
                      <RiMoneyDollarCircleLine className="ml-1" size={20} />
                    </button>
                  )}
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteAppointment(booking._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Cencel <RiCloseFill className="ml-1" size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointment;
