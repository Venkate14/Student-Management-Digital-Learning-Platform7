import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Students() {
  const student = {
    name: "John Doe",
    email: "john.doe@example.com",
    age: 20,
    phone: "+1-234-567-8901",
    address: "123 Main St, Anytown, USA",
    major: "Computer Science",
    gpa: 3.8,
    enrollmentDate: "2022-09-01",
    graduationYear: 2026,
    studentId: "STU123456",
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4 fw-bold text-primary">Student Details</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">{student.name}</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Email: {student.email}</li>
            <li className="list-group-item">Age: {student.age}</li>
            <li className="list-group-item">Phone: {student.phone}</li>
            <li className="list-group-item">Address: {student.address}</li>
            <li className="list-group-item">Major: {student.major}</li>
            <li className="list-group-item">GPA: {student.gpa}</li>
            <li className="list-group-item">
              Enrollment Date: {student.enrollmentDate}
            </li>
            <li className="list-group-item">
              Graduation Year: {student.graduationYear}
            </li>
            <li className="list-group-item">
              Student ID: {student.studentId}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Students;
