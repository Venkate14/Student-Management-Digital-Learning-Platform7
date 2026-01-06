import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Attendance = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "Take Attendance", text: "Mark daily attendance.", color: "bg-danger" },
        { title: "Attendance Reports", text: "View monthly or yearly logs.", color: "bg-primary" },
        { title: "Leave Requests", text: "Approve or deny student leave.", color: "bg-info" },
        { title: "Absence Alerts", text: "Students with low attendance.", color: "bg-dark" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Attendance Tracker</h2>
            <div className="row g-4">
                {cards.map((card, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className={`card text-white ${card.color} h-100 shadow-sm`}>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-light btn-sm mt-2">View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0">Today's Attendance Log</h4>
                    <span className="text-muted">Date: Jan 06, 2026</span>
                </div>
                <div className="table-responsive">
                    <table className="table table-sm table-striped border bg-white">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Time In</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>S101</td><td>Alice Johnson</td><td>CS-A</td><td>08:55 AM</td><td className="text-success fw-bold">Present</td></tr>
                            <tr><td>S102</td><td>Bob Williams</td><td>CS-A</td><td>09:05 AM</td><td className="text-warning fw-bold">Late</td></tr>
                            <tr><td>S103</td><td>Charlie Brown</td><td>CS-B</td><td>-</td><td className="text-danger fw-bold">Absent</td></tr>
                            <tr><td>S104</td><td>David Miller</td><td>CS-A</td><td>08:50 AM</td><td className="text-success fw-bold">Present</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Attendance;
