import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Teachers = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "Faculty Directory", text: "View all registered teachers.", color: "bg-primary" },
        { title: "Add Teacher", text: "Onboard new faculty members.", color: "bg-success" },
        { title: "Departments", text: "Manage academic departments.", color: "bg-info" },
        { title: "Timetables", text: "View teacher schedules.", color: "bg-warning" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Teachers Management</h2>
            <div className="row g-4">
                {cards.map((card, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className={`card text-white ${card.color} h-100 shadow-sm`}>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-light btn-sm mt-2">Open</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <h4 className="mb-3">Faculty Directory</h4>
                <div className="table-responsive">
                    <table className="table table-hover table-bordered bg-white shadow-sm">
                        <thead className="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Department</th>
                                <th>Subject</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>#T001</td><td>Dr. Sarah Smith</td><td>Computer Science</td><td>Algorithms</td><td><span className="badge bg-success">Active</span></td></tr>
                            <tr><td>#T002</td><td>Prof. John Doe</td><td>Mathematics</td><td>Calculus</td><td><span className="badge bg-success">Active</span></td></tr>
                            <tr><td>#T003</td><td>Mrs. Emily Davis</td><td>Physics</td><td>Quantum Mechanics</td><td><span className="badge bg-warning text-dark">On Leave</span></td></tr>
                            <tr><td>#T004</td><td>Mr. Michael Brown</td><td>Chemistry</td><td>Organic Chem</td><td><span className="badge bg-success">Active</span></td></tr>
                            <tr><td>#T005</td><td>Dr. Lisa Wilson</td><td>Biology</td><td>Genetics</td><td><span className="badge bg-danger">Retired</span></td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Teachers;
