import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

// Replace with your Stripe public key
const stripePromise = loadStripe("pk_test_51PZmx2Ro2enkpQYdZ3ZdtlrvB8ixKb9oW0nuhncTegOGpo2M4gnGqE1sgo9pppKCFZ9P8nDZHJgBdRjVat4qUnhm00jbkvAaV0");

const Payment = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className="App">
        <CheckoutForm />
      </div>
    </Elements>
  );
};

export default Payment;
