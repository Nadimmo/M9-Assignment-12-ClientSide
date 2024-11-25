import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Replace with your Stripe public key
const stripePromise = loadStripe("your-publishable-key-here");

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <h1 className="text-2xl font-bold text-center mt-4">Stripe Payment</h1>
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Payment;
