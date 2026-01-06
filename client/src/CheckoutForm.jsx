import React, { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm({ price, onSuccess, onCancel }) {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: window.location.origin + "/pdfs",
            },
            redirect: "if_required", // Prevent redirect if not needed
        });

        if (error) {
            setMessage(error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setMessage("Payment succeeded!");
            onSuccess(paymentIntent);
        } else {
            setMessage("Unexpected state.");
        }

        setIsLoading(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <h5 className="mb-3">Pay ₹{price}</h5>
            <PaymentElement id="payment-element" />
            <button
                disabled={isLoading || !stripe || !elements}
                id="submit"
                className="btn btn-primary w-100 mt-3"
            >
                <span id="button-text">
                    {isLoading ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Pay now"}
                </span>
            </button>
            <button
                type="button"
                className="btn btn-secondary w-100 mt-2"
                onClick={onCancel}
                disabled={isLoading}
            >
                Cancel
            </button>

            {message && <div id="payment-message" className="alert alert-info mt-3">{message}</div>}
        </form>
    );
}
