import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

function Payment() {
  const bookings = useLoaderData();
  const { appointmentDate, price, slot, treatment } = bookings;
  return (
    <div className="p-10">
      <h1>Paymetn For {treatment}</h1>
      <h1>
        Paymetn For <strong>${price}</strong> for your appointment on{" "}
        <strong>{appointmentDate}</strong> at <strong>{slot}</strong>
        <div className="w-96 my-12">
          <Elements stripe={stripePromise}>
            <CheckoutForm bookings={bookings} />
          </Elements>
        </div>
      </h1>
    </div>
  );
}

export default Payment;
