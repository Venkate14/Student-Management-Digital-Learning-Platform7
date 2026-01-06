import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Assignments = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "Active Assignments", text: "View currently active tasks.", color: "bg-primary" },
        { title: "Create New", text: "Distribute a new assignment.", color: "bg-success" },
        { title: "Grading Queue", text: "assignments pending review.", color: "bg-warning text-dark" },
        { title: "Archives", text: "Past semesters assignments.", color: "bg-secondary" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Assignments Central</h2>
            <div className="row g-4">
                {cards.map((card, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className={`card text-white ${card.color} h-100 shadow-sm`}>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-light btn-sm mt-2">Access</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <h4 className="mb-3">Recent Assignments</h4>
                <div className="list-group shadow-sm">
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Data Structures Project</h6>
                            <small className="text-muted">Due: Jan 15, 2026</small>
                        </div>
                        <span className="badge bg-primary rounded-pill">32 Submitted</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Calculus Midterm Prep</h6>
                            <small className="text-muted">Due: Jan 10, 2026</small>
                        </div>
                        <span className="badge bg-warning text-dark rounded-pill">Pending</span>
                    </div>
                    <div className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h6 className="mb-1">Physics Lab Report</h6>
                            <small className="text-muted">Due: Dec 20, 2025</small>
                        </div>
                        <span className="badge bg-success rounded-pill">Graded</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Assignments;
