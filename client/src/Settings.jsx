import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Settings = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "Profile Settings", text: "Update your personal info.", color: "bg-secondary" },
        { title: "Notifications", text: "Manage email alerts.", color: "bg-dark" },
        { title: "Security", text: "Password and 2FA.", color: "bg-danger" },
        { title: "App Config", text: "System-wide preferences.", color: "bg-primary" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Settings</h2>
            <div className="row g-4">
                {cards.map((card, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className={`card text-white ${card.color} h-100 shadow-sm`}>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-light btn-sm mt-2">Configure</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Settings;
