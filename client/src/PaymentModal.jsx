import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useRazorpay from "react-razorpay";

const PaymentModal = ({ show, onClose, product, orderId, onSuccess }) => {
    const [Razorpay] = useRazorpay();

    if (!show) return null;

    const handlePayment = (method) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID || "rzp_test_YOUR_KEY_ID", // Load from env or fallback
            amount: product.price * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Dub Technologies",
            description: `Purchase ${product.title} `,
            image: "https://example.com/your_logo", // Optional
            order_id: orderId, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response) {
                // Validate payment at server - using "razorpay_payment_id", "razorpay_order_id", "razorpay_signature"
                alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id} `);
                if (onSuccess) onSuccess(response);
            },
            prefill: {
                name: "Student Name",
                email: "student@example.com",
                contact: "9999999999",
                method: method // This might pre-select, but Razorpay Standard Checkout handles the UI
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        const rzp1 = new Razorpay(options);
        rzp1.on("payment.failed", function (response) {
            alert(response.error.description);
        });
        rzp1.open();
    };

    return (
        <div
            className="modal show d-block"
            tabIndex="-1"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content shadow-sm" style={{ borderRadius: "10px", maxWidth: "450px" }}>

                    <div className="modal-header border-0 pt-3 pb-0 px-3">
                        <h5 className="modal-title fw-bold" style={{ fontSize: "18px" }}>Select Payment Method</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                    </div>

                    <div className="modal-body px-4 pb-4 pt-2">
                        <p className="text-muted mb-4" style={{ fontSize: "14px" }}>
                            Complete your purchase details securely.
                        </p>

                        <div className="d-grid gap-3">
                            {/* PhonePe Button */}
                            <button
                                className="btn d-flex align-items-center justify-content-between p-3 border rounded shadow-sm"
                                style={{ backgroundColor: "#5f259f", color: "white" }}
                                onClick={() => handlePayment('upi')}
                            >
                                <div className="d-flex align-items-center gap-3">
                                    {/* Placeholder Icon */}
                                    <div style={{ width: '30px', height: '30px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <span style={{ color: '#5f259f', fontWeight: 'bold', fontSize: '10px' }}>Pe</span>
                                    </div>
                                    <span className="fw-bold fs-5">PhonePe</span>
                                </div>
                                <span className="badge bg-light text-dark rounded-pill">UPI</span>
                            </button>

                            {/* Google Pay Button */}
                            <button
                                className="btn d-flex align-items-center justify-content-between p-3 border rounded shadow-sm"
                                style={{ backgroundColor: "#ffffff", color: "#1f1f1f", border: "1px solid #ddd" }}
                                onClick={() => handlePayment('upi')}
                            >
                                <div className="d-flex align-items-center gap-3">
                                    {/* Placeholder Icon */}
                                    {/* Using a generic SVG or text for GPay */}
                                    <span style={{ fontWeight: 'bold', fontSize: '20px', color: '#4285F4' }}>G</span>
                                    <span className="fw-bold fs-5">Pay</span>
                                </div>
                                <span className="badge bg-secondary rounded-pill">UPI</span>
                            </button>

                            {/* Razorpay (All Options) Button */}
                            <button
                                className="btn d-flex align-items-center justify-content-between p-3 border rounded shadow-sm"
                                style={{ backgroundColor: "#3399cc", color: "white" }}
                                onClick={() => handlePayment()}
                            >
                                <div className="d-flex align-items-center gap-3">
                                    <span className="fw-bold fs-5">Other / Card</span>
                                </div>
                                <span className="small">All options</span>
                            </button>
                        </div>

                        <div className="text-center mt-4">
                            <small className="text-muted" style={{ fontSize: "11px" }}>
                                Secured by Razorpay
                            </small>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;
