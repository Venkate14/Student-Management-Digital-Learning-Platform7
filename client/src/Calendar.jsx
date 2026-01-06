import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Calendar = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "Class Schedule", text: "View daily timetables.", color: "bg-info" },
        { title: "Exam Dates", text: "Upcoming examination schedule.", color: "bg-warning text-dark" },
        { title: "Holiday List", text: "Public and school holidays.", color: "bg-success" },
        { title: "Events", text: "School functions and meets.", color: "bg-primary" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Calendar & Events</h2>
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
        </div>
    );
};

export default Calendar;
