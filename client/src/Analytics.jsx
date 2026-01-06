import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Analytics = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "Performance Charts", text: "Visualizing student progress.", color: "bg-info" },
        { title: "Enrollment Stats", text: "Admission data over time.", color: "bg-success" },
        { title: "Financial", text: "Revenue and expense reports.", color: "bg-danger" },
        { title: "System Usage", text: "Login and activity logs.", color: "bg-primary" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Data Analytics</h2>
            <div className="row g-4">
                {cards.map((card, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className={`card text-white ${card.color} h-100 shadow-sm`}>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-light btn-sm mt-2">Analyze</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5 row">
                <div className="col-md-6">
                    <div className="card shadow-sm p-3">
                        <h5 className="card-title">Enrollment Growth (2025-2026)</h5>
                        <div className="progress mt-3" style={{ height: "30px" }}>
                            <div className="progress-bar bg-success" role="progressbar" style={{ width: "75%" }}>75% Increase</div>
                        </div>
                        <p className="mt-2 text-muted">Total Students: 1,250</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card shadow-sm p-3">
                        <h5 className="card-title">Revenue (Last 30 Days)</h5>
                        <div className="d-flex align-items-end gap-2" style={{ height: "100px" }}>
                            <div style={{ width: "20%", height: "40%", background: "blue" }}></div>
                            <div style={{ width: "20%", height: "60%", background: "blue" }}></div>
                            <div style={{ width: "20%", height: "80%", background: "blue" }}></div>
                            <div style={{ width: "20%", height: "50%", background: "blue" }}></div>
                            <div style={{ width: "20%", height: "90%", background: "blue" }}></div>
                        </div>
                        <p className="mt-2 text-muted">Total: ₹ 45,000</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
