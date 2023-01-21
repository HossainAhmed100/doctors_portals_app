import React, { useContext } from "react";
import { format } from "date-fns";
import { AuthContext } from "../../../Contexts/AuthProvider";
import { toast } from "react-toastify";

function BookingModal({ treatment, setTreatment, selectedDate, refetch }) {
  const { user } = useContext(AuthContext);
  const date = format(selectedDate, "PP");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const phone = form.phone.value;
    const booking = {
      slot,
      phone,
      email: user?.email,
      appointmentDate: date,
      treatment: treatment.name,
      patient: user?.displayName,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          setTreatment(null);
          toast.success("Booking Confirm");
          refetch();
        } else {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg text-center font-bold">{treatment?.name}</h3>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-col p-4 m-auto space-y-5 items-center justify-center"
          >
            <input
              type="text"
              defaultValue={date}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {treatment?.slots?.map((slots, index) => (
                <option key={index} value={slots}>
                  {slots}
                </option>
              ))}
            </select>
            <input
              type="text"
              defaultValue={user?.displayName && user?.displayName}
              disabled
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="email"
              defaultValue={user?.email && user?.email}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              placeholder="Phone"
              name="phone"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value={"Submit"}
              className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 py-2 px-3 rounded-md duration-500 text-base font-medium text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
