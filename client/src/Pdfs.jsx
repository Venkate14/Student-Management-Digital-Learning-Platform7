import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import PaymentModal from "./PaymentModal";
import pdfs from "./pdfsDate";

const stripePromise = loadStripe("pk_test_51Sm5MIKFtXLNlWejjvjZS6YJadTVcvMmQsWKdVSa7bDWoWXih12pZd4tdT7c5qMigUO0u800aSqiRYwDjl68CHTW00I7zBuBvb"); // REPLACE WITH YOUR PUBLISHABLE KEY

function Pdfs() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all"); // all | free | paid
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [purchasedIds, setPurchasedIds] = useState([]);
  const userEmail = localStorage.getItem("userEmail");

  React.useEffect(() => {
    if (userEmail) {
      fetch(`http://localhost:3001/user-purchases/${userEmail}`)
        .then((res) => res.json())
        .then((data) => setPurchasedIds(data || []))
        .catch((err) => console.error("Failed to load purchases", err));
    }
  }, [userEmail]);

  const filtered = pdfs.filter((p) =>
    filter === "all" ? true : p.type === filter
  );

  const handleButtonClick = (p) => {
    const isPurchased = p.type === "free" || purchasedIds.includes(p.id);

    if (isPurchased) {
      navigate(`/pdfs/${p.id}`);
    } else {
      if (!userEmail) {
        alert("Please login to buy PDFs");
        navigate("/login");
        return;
      }
      setSelectedPdf(p);
      // Create Payment Intent on the server
      fetch("http://localhost:3001/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: p.price * 100 }), // Amount in cents
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            alert("Payment init failed: " + data.error + ". Check server console/keys.");
            return;
          }
          if (!data.clientSecret) {
            alert("No client secret received. Check server Stripe keys.");
            return;
          }
          setClientSecret(data.clientSecret);
          setShowPaymentModal(true);
        })
        .catch((err) => {
          console.error("Error creating payment intent:", err);
          alert("Network error or server down. Check console.");
        });
    }
  };

  const handlePaymentSuccess = (paymentIntent) => {
    fetch("http://localhost:3001/record-purchase", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, pdfId: selectedPdf.id }),
    })
      .then(() => {
        setPurchasedIds((prev) => [...prev, selectedPdf.id]);
        alert(`Payment successful! You now own "${selectedPdf.title}"`);
        setShowPaymentModal(false);
        setSelectedPdf(null);
        setClientSecret("");
      })
      .catch((err) => {
        console.error("Save purchase failed:", err);
        alert("Payment succeeded but failed to save. Please contact support.");
      });
  };

  const closeModal = () => {
    setShowPaymentModal(false);
    setSelectedPdf(null);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="mb-0">PDF Library</h3>
        <div>
          <button
            className="btn btn-outline-secondary me-2"
            onClick={() => navigate("/home")}
          >
            Home
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() => navigate("/students")}
          >
            Students
          </button>
        </div>
      </div>

      <div className="mb-3 d-flex align-items-center gap-2">
        <div className="btn-group" role="group" aria-label="filter">
          <button
            className={`btn ${filter === "all" ? "btn-primary" : "btn-outline-primary"
              }`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`btn ${filter === "free" ? "btn-primary" : "btn-outline-primary"
              }`}
            onClick={() => setFilter("free")}
          >
            Free
          </button>
          <button
            className={`btn ${filter === "paid" ? "btn-primary" : "btn-outline-primary"
              }`}
            onClick={() => setFilter("paid")}
          >
            Paid
          </button>
        </div>
        <small className="text-muted ms-3">
          {filtered.length} items
        </small>
      </div>

      <div className="row g-3">
        {filtered.map((p) => (
          <div className="col-6 col-sm-4 col-md-3" key={p.id}>
            <div className="card h-100 shadow-sm position-relative">
              <img
                src={p.preview || "https://via.placeholder.com/400x200?text=PDF"}
                alt={p.title}
                className="card-img-top"
                style={{ height: "120px", objectFit: "cover" }}
              />

              {p.type === "paid" && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "120px",
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontSize: "16px",
                  }}
                >
                  Paid
                </div>
              )}

              <div
                className="card-body p-2 d-flex flex-column"
                style={{ minHeight: "110px" }}
              >
                <h6
                  className="card-title mb-1"
                  style={{ fontSize: "14px", lineHeight: 1.1 }}
                >
                  {p.title}
                </h6>
                <p
                  className="text-muted mb-2"
                  style={{ fontSize: "12px" }}
                >
                  {p.author}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <span
                    className={`badge ${p.type === "free"
                      ? "bg-success"
                      : "bg-warning text-dark"
                      }`}
                    style={{ fontSize: "12px" }}
                  >
                    {p.type === "free" ? "Free" : "Paid"}
                  </span>
                  {p.type === "paid" && (
                    <span style={{ fontSize: "12px" }}>₹{p.price}</span>
                  )}
                  <button
                    className={`btn btn-sm ${(p.type === "free" || purchasedIds.includes(p.id))
                      ? "btn-primary"
                      : "btn-outline-primary"
                      }`}
                    onClick={() => handleButtonClick(p)}
                  >
                    {(p.type === "free" || purchasedIds.includes(p.id)) ? "Open" : "Buy"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="col-12">
            <div className="alert alert-info mb-0">
              No PDFs found for selected filter.
            </div>
          </div>
        )}
      </div>

      {showPaymentModal && selectedPdf && clientSecret && (
        <PaymentModal
          show={showPaymentModal}
          onClose={closeModal}
          product={selectedPdf}
          clientSecret={clientSecret}
          stripePromise={stripePromise}
          CheckoutForm={CheckoutForm}
          Elements={Elements}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </div>
  );
}

export default Pdfs;
