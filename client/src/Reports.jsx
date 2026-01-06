import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Reports = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "Academic Reports", text: "Term-wise analysis.", color: "bg-primary" },
        { title: "Attendance Logs", text: "Monthly attendance summaries.", color: "bg-success" },
        { title: "Financial Statements", text: "Fee collection reports.", color: "bg-danger" },
        { title: "Audit Trail", text: "System modification logs.", color: "bg-secondary" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Reports Center</h2>
            <div className="row g-4">
                {cards.map((card, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className={`card text-white ${card.color} h-100 shadow-sm`}>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-light btn-sm mt-2">Generate</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
