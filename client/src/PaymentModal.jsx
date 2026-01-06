import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentModal = ({ show, onClose, product, clientSecret, stripePromise, CheckoutForm, Elements, onSuccess }) => {
    const [paymentMethod, setPaymentMethod] = useState("paypal_credit_card"); // default selection

    if (!show) return null;

    return (
        <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow-sm" style={{ borderRadius: "10px", maxWidth: "400px" }}>

                    <div className="modal-header border-0 pt-3 pb-0 px-3">
                        <h5 className="modal-title fw-bold" style={{ fontSize: "16px" }}>Check out with PayPal</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>

                    <div className="modal-body px-4 pb-4 pt-2">

                        <p className="text-muted mb-3" style={{ fontSize: "13px" }}>
                            Save time. Checkout securely. Pay without sharing your financial information.
                        </p>

                        {/* PayPal Buttons */}
                        <div className="d-grid gap-2 mb-3">
                            <button
                                className="btn d-flex align-items-center justify-content-center"
                                style={{ backgroundColor: "#ffc439", borderRadius: "20px", height: "45px", border: "none" }}
                                onClick={() => alert("Redirecting to PayPal...")}
                            >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={{ height: "24px" }} />
                            </button>

                            <button
                                className="btn d-flex align-items-center justify-content-center text-white"
                                style={{ backgroundColor: "#003087", borderRadius: "20px", height: "45px", border: "none" }}
                                onClick={() => alert("Redirecting to PayPal Credit...")}
                            >
                                <span style={{ fontWeight: "bold", fontStyle: "italic", marginRight: "5px" }}>PayPal</span>
                                <span style={{ fontWeight: "normal" }}>CREDIT</span>
                            </button>
                        </div>

                        {/* Card Icons */}
                        <div className="d-flex justify-content-center gap-2 mb-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" style={{ height: "20px" }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" style={{ height: "20px" }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" style={{ height: "20px" }} />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Discover_Card_logo.svg/200px-Discover_Card_logo.svg.png" alt="Discover" style={{ height: "20px" }} />
                        </div>

                        <div className="text-center mb-3">
                            <span className="text-muted fst-italic" style={{ fontSize: "11px" }}>Powered by </span>
                            <strong className="text-primary fst-italic" style={{ fontSize: "12px" }}>PayPal</strong>
                        </div>

                        <hr className="my-3" />

                        {/* Radio Option */}
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="paymentMethod"
                                id="creditCard"
                                checked={paymentMethod === "paypal_credit_card"}
                                onChange={() => setPaymentMethod("paypal_credit_card")}
                            />
                            <label className="form-check-label fw-bold" htmlFor="creditCard" style={{ fontSize: "15px", color: "#000" }}>
                                Online Credit Card or PayPal
                            </label>
                        </div>

                        {/* If selected, we can show the stripe form here as the "Credit Card" part of the "Online Credit Card" option? 
                Or just leave it as the template for now. 
                The user asked for the "template". 
                I'll add a section below that renders the Stripe form if they pick a different option, or just inside here.
                Let's make it expandable.
            */}

                        {paymentMethod === "paypal_credit_card" && (
                            <div className="mt-3 p-3 border rounded bg-light">
                                {/* Re-integrating Stripe Form as user likely wants functionality too */}
                                <div style={{ fontSize: '13px', marginBottom: '10px' }}>Enter your card details:</div>
                                {clientSecret && stripePromise && Elements && CheckoutForm ? (
                                    <Elements options={{ clientSecret, appearance: { theme: 'stripe' } }} stripe={stripePromise}>
                                        <CheckoutForm
                                            price={product.price}
                                            onSuccess={onSuccess}
                                            onCancel={onClose}
                                        />
                                    </Elements>
                                ) : (
                                    <div>Loading Stripe...</div>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
