import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "./../../components/Hooks/useAxiosSecure";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [cartError, setCartError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const totalPrice = 25;

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

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
      card,
    });

    if (error) {
      setCartError(error.message);
    } else {
      setCartError("");
    }

    const { paymentIntent, error: cartError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user?.email || "anonymous",
          },
        },
      }
    );

    if (cartError) {
      console.log("error", cartError);
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const payment = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
        };

        const res = await axiosSecure.post("/payments", payment);

        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Payment Successfully`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-500 via-gray-800 to-black flex items-center justify-center">
      <div className="max-w-lg w-full bg-gray-800 shadow-xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">
          Secure Checkout
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="p-4 border border-gray-700 rounded-md bg-gray-900">
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Card Details
            </label>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#e2e8f0", // Light gray for readability
                    "::placeholder": {
                      color: "#718096", // Muted gray for placeholders
                    },
                  },
                  invalid: {
                    color: "#f56565", // Red for errors
                  },
                },
              }}
              className="p-2 bg-gray-800 rounded-md"
            />
          </div>
          {cartError && (
            <p className="text-red-500 text-sm font-medium">{cartError}</p>
          )}
          {transactionId && (
            <p className="text-green-500 text-sm font-medium">
              Transaction ID: {transactionId}
            </p>
          )}
          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-br from-sky-500 via-gray-500 to-black  text-white text-lg font-medium rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-indigo-500 disabled:opacity-50"
            disabled={!stripe || !clientSecret}
          >
            Pay 
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutForm;
