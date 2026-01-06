import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Resources = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "E-Books", text: "Digital textbooks repository.", color: "bg-primary" },
        { title: "Lab Manuals", text: "Practical guides and notes.", color: "bg-dark" },
        { title: "Video Lectures", text: "Recorded classroom sessions.", color: "bg-danger" },
        { title: "Research Papers", text: "Academic journals access.", color: "bg-info" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Learning Resources</h2>
            <div className="row g-4">
                {cards.map((card, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className={`card text-white ${card.color} h-100 shadow-sm`}>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-light btn-sm mt-2">Browse</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
