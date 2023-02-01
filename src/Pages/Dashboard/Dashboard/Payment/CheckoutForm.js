import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../../../../axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";

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
    axios
      .post("/create-payment-intent", price, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => setClientSecret(res.data.clientSecret));
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
      const payment = {
        price,
        email: bookings.email,
        bookingId: bookings._id,
        transactionid: paymentIntent.id,
      };
      axios
        .post(
          "/payments",
          { payment },
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((res) => {
          setSuccessMesage("Congrats! Your payment completed");
          setTransactionid(paymentIntent.id);
          setProcessing(false);
        });
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
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150"
        >
          {processing && (
            <CgSpinner class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
          )}
          PAY
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
