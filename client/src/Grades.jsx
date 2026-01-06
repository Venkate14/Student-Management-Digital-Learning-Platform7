import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Grades = () => {
    const navigate = useNavigate();

    const cards = [
        { title: "Gradebook", text: "Enter and edit student marks.", color: "bg-success" },
        { title: "Publish Results", text: "Release grades to students.", color: "bg-primary" },
        { title: "Transcripts", text: "Generate official transcripts.", color: "bg-secondary" },
        { title: "GPA Calculator", text: "Calculate class averages.", color: "bg-warning text-dark" },
    ];

    return (
        <div className="container py-5">
            <button className="btn btn-outline-secondary mb-4" onClick={() => navigate("/home")}>&larr; Back to Dashboard</button>
            <h2 className="mb-4">Grades & Results</h2>
            <div className="row g-4">
                {cards.map((card, idx) => (
                    <div className="col-md-3" key={idx}>
                        <div className={`card text-white ${card.color} h-100 shadow-sm`}>
                            <div className="card-body">
                                <h5 className="card-title">{card.title}</h5>
                                <p className="card-text">{card.text}</p>
                                <button className="btn btn-light btn-sm mt-2">Manage</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-5">
                <h4 className="mb-3">Student Performance Overview</h4>
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-bordered bg-white">
                            <thead className="table-dark">
                                <tr>
                                    <th>Student</th>
                                    <th>Subject</th>
                                    <th>Midterm</th>
                                    <th>Final</th>
                                    <th>Total</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Alice Johnson</td><td>Algorithms</td><td>85</td><td>90</td><td>175</td><td>A</td></tr>
                                <tr><td>Bob Williams</td><td>Algorithms</td><td>70</td><td>65</td><td>135</td><td>C</td></tr>
                                <tr><td>Charlie Brown</td><td>Algorithms</td><td>92</td><td>95</td><td>187</td><td>A+</td></tr>
                                <tr><td>David Miller</td><td>Algorithms</td><td>60</td><td>55</td><td>115</td><td>D</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header bg-primary text-white">Class Statistics</div>
                            <div className="card-body">
                                <p><strong>Average:</strong> 78%</p>
                                <p><strong>Highest:</strong> 98% (Charlie)</p>
                                <p><strong>Lowest:</strong> 55% (David)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grades;
