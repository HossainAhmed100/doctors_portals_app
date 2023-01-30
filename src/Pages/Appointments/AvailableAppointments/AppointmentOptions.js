import React from "react";

function AppointmentOptions({ options, setStatement }) {
  return (
    <div className="card-body rounded-md shadow-md border-2 flex items-center justify-center">
      <h2 className="card-title text-cyan-500">{options.name}</h2>
      <p>{options.slots.length > 0 ? options.slots[0] : "Try Another Day"}</p>
      <p>
        {options.slots.length} {options.slots.length > 1 ? "Spaces" : "Space"}{" "}
        Available
      </p>
      <p>Price {options.price}$</p>
      <div className="card-actions justify-end">
        <label
          disabled={options.slots.length === 0}
          onClick={() => setStatement(options)}
          htmlFor="booking-modal"
          className="btn btn-primary"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
}

export default AppointmentOptions;
