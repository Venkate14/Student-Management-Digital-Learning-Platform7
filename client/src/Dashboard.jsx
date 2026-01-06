import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// ...existing code...

function Dashboard() {
  const navigate = useNavigate();

  const items = [
    { title: 'PDFs', desc: 'BTech CSE PDF library (free & paid)', route: '/pdfs', color: 'primary' },
    { title: 'Students', desc: 'Student profiles', route: '/students', color: 'success' },
    { title: 'Teachers', desc: 'Teacher management', route: '/teachers', color: 'warning' },
    { title: 'Assignments', desc: 'Create & grade', route: '/assignments', color: 'info' },
    { title: 'Attendance', desc: 'Attendance tracking', route: '/attendance', color: 'secondary' },
    { title: 'Grades', desc: 'Gradebook & reports', route: '/grades', color: 'dark' },
    { title: 'Reports', desc: 'Analytics & exports', route: '/reports', color: 'danger' },
    { title: 'Calendar', desc: 'Events & deadlines', route: '/calendar', color: 'primary' },
    { title: 'Resources', desc: 'Learning materials', route: '/resources', color: 'success' },
    { title: 'Notifications', desc: 'Alerts & messages', route: '/notifications', color: 'info' },
    { title: 'Analytics', desc: 'Platform insights', route: '/analytics', color: 'warning' },
    { title: 'Settings', desc: 'Configuration', route: '/settings', color: 'secondary' },
  ];

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="mb-0">Dashboard</h2>
        <div>
          <button className="btn btn-outline-secondary me-2" onClick={() => navigate('/home')}>Home</button>
        </div>
      </div>

      <div className="row g-4">
        {items.map((it) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={it.title}>
            <div className="card h-100 border-0 shadow-sm">
              <div className={`card-header bg-${it.color} text-white d-flex justify-content-between align-items-center`}>
                <strong>{it.title}</strong>
                <span className="badge bg-white text-dark">{it.title[0]}</span>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="card-text text-muted flex-grow-1">{it.desc}</p>
                <div className="d-grid">
                  <button className={`btn btn-${it.color}`} onClick={() => navigate(it.route)}>Open</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;