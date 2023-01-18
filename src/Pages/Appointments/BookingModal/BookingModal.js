import React from "react";
import { format } from "date-fns";

function BookingModal({ treatment, setTreatment, selectedDate }) {
  const date = format(selectedDate, "PP");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const booking = {
      appointmentDate: date,
      treatment: treatment.name,
      slot,
      patient: name,
      email,
      phone,
    };
    setTreatment(null);
    console.log(booking);
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
              type="email"
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
              placeholder="name"
              name="name"
              className="input input-bordered w-full max-w-xs"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
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