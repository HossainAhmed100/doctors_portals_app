import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect } from "react";
import { useState } from "react";

function CheckoutForm({ bookings }) {
  const stripe = useStripe();
  const [cardErrors, setCardErrors] = useState("");
  const [successMesage, setSuccessMesage] = useState("");
  const [transactionid, setTransactionid] = useState("");
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const { price } = bookings;
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });
    if (error) {
      setCardErrors(error.message);
      console.log(error);
    } else {
      setCardErrors("");
    }
    setSuccessMesage("");
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: "Jenny Rosen",
          },
        },
      });
    if (confirmError) {
      setCardErrors(confirmError.message);
    }
    if (paymentIntent.status === "succeeded") {
      setSuccessMesage("Congrats! Your payment completed");
      setTransactionid(paymentIntent.id);
      setProcessing(false);
    }
    console.log(paymentIntent);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-sm p-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{cardErrors}</p>
      {successMesage && (
        <div>
          <p className="text-green-400">{successMesage}</p>
          <p className="text-green-400">ID: {transactionid}</p>
        </div>
      )}
    </>
  );
}

export default CheckoutForm;
