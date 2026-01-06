import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatBot from "./ChatBot";

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    navigate("/register");
  };

  const modules = [
    { title: "PDF Library", desc: "Access premium notes", route: "/pdfs", icon: "📚", color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { title: "Students", desc: "Manage profiles", route: "/students", icon: "👨‍🎓", color: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)" },
    { title: "Teachers", desc: "Faculty directory", route: "/teachers", icon: "👩‍🏫", color: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)" },
    { title: "Assignments", desc: "Track grading", route: "/assignments", icon: "📝", color: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
    { title: "Attendance", desc: "Daily logs", route: "/attendance", icon: "📅", color: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)" },
    { title: "Grades", desc: "Analytics", route: "/grades", icon: "📊", color: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)" },
    { title: "Analytics", desc: "Insights", route: "/analytics", icon: "📈", color: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)" },
    { title: "Reports", desc: "View logs", route: "/reports", icon: "📑", color: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)" },
    { title: "Calendar", desc: "Events", route: "/calendar", icon: "🗓️", color: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
    { title: "Resources", desc: "Study materials", route: "/resources", icon: "📖", color: "linear-gradient(135deg, #C9D6FF 0%, #E2E2E2 100%) text-dark" },
    { title: "Notifications", desc: "Alerts", route: "/notifications", icon: "🔔", color: "linear-gradient(135deg, #FC466B 0%, #3F5EFB 100%)" },
    { title: "Settings", desc: "Configuration", route: "/settings", icon: "⚙️", color: "linear-gradient(to right, #434343 0%, black 100%)" },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#f8f9fa" }}>
      <ChatBot />

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow sticky-top">
        <span className="navbar-brand fw-bold d-flex align-items-center gap-2">
          <span style={{ fontSize: "1.8rem" }}>🚀</span>
          <span style={{ letterSpacing: "1px" }}>Student Management</span>
        </span>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto me-3">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Modules
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#" onClick={() => navigate("/pdfs")}>PDF Library</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => navigate("/students")}>Students</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => navigate("/teachers")}>Teachers</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => navigate("/assignments")}>Assignments</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => navigate("/attendance")}>Attendance</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => navigate("/grades")}>Grades</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#" onClick={() => navigate("/settings")}>Settings</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <button className="btn btn-outline-light btn-sm rounded-pill px-3" onClick={() => window.scrollTo(0, document.body.scrollHeight)}>About Us</button>
          <button className="btn btn-danger btn-sm rounded-pill px-4 fw-bold" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="hero-section text-white text-center py-5"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://source.unsplash.com/1600x900/?students,classroom,learning') center/cover no-repeat"
        }}
      >
        <div className="container py-5">
          <h1 className="display-3 fw-bold mb-3 animate-slide-down">Welcome to Dashboard</h1>
          <h3 className="fw-light mb-4 animate-fade-in text-warning">Dub Technologies</h3>
          <p className="lead mb-4 opacity-75 animate-fade-in fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            The ultimate platform for <strong>Student Management</strong>, <strong>Digital Learning</strong>, and <strong>Secure Payments</strong>.
            Streamline your workflow with our all-in-one ecosystem.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <button className="btn btn-primary btn-lg rounded-pill px-5 shadow-lg animate-bounce" onClick={() => navigate("/pdfs")}>Browse PDFs</button>
            <button className="btn btn-outline-light btn-sm rounded-pill px-4" onClick={() => window.scrollTo(0, 800)}>Learn More ▼</button>
          </div>
        </div>
      </div>

      {/* Dashboard Grid */}
      <div className="container py-5 flex-grow-1">
        <h4 className="border-start border-4 border-primary ps-3 mb-4 fw-bold">Quick Access Modules</h4>
        <div className="row g-4 justify-content-center">
          {modules.map((m, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <div
                className="card h-100 border-0 shadow-sm card-hover"
                style={{ borderRadius: "20px", overflow: "hidden", cursor: "pointer", background: "white" }}
                onClick={() => navigate(m.route)}
              >
                <div
                  className="card-body d-flex flex-column align-items-center justify-content-center text-center p-4 position-relative"
                  style={{ zIndex: 1 }}
                >
                  <div
                    className="icon-bg mb-3 rounded-circle d-flex align-items-center justify-content-center shadow-sm"
                    style={{ width: "80px", height: "80px", background: m.color, color: "white", fontSize: "2.5rem" }}
                  >
                    {m.icon}
                  </div>
                  <h5 className="fw-bold text-dark mb-1">{m.title}</h5>
                  <p className="text-muted small mb-0">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Uses & Features Section */}
      <div className="bg-white py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Why Use Dub Technologies?</h2>
            <p className="text-muted">Explore the powerful capabilities of our platform.</p>
          </div>

          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 h-100 border" style={{ background: "#f8f9fa" }}>
                <h3 className="text-primary mb-3">🎓 Advanced E-Learning</h3>
                <p className="text-muted">
                  Access a vast library of BTech CSE notes, tutorials, and resources.
                  Our digital library features <strong>Paid & Free PDFs</strong> with secure, real-time payment integration.
                </p>
                <ul className="list-unstyled small text-secondary">
                  <li>• Instant PDF Unlock</li>
                  <li>• Secure Stripe/UPI Payments</li>
                  <li>• Mobile Friendly Viewer</li>
                </ul>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 h-100 border" style={{ background: "#f8f9fa" }}>
                <h3 className="text-success mb-3">👨‍💼 Student Management</h3>
                <p className="text-muted">
                  Effortlessly track student lifecycles from enrollment to graduation.
                  Keep records of attendance, grades, and personal details in one secure database.
                </p>
                <ul className="list-unstyled small text-secondary">
                  <li>• Real-time Profiles</li>
                  <li>• Attendance Tracking</li>
                  <li>• Performance Graphs</li>
                </ul>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="p-4 rounded-4 h-100 border" style={{ background: "#f8f9fa" }}>
                <h3 className="text-info mb-3">⚡ Seamless Admin Tools</h3>
                <p className="text-muted">
                  Powerful tools for Administrators and Teachers to manage the institution.
                  Generate reports, schedule classes, and manage faculty with ease.
                </p>
                <ul className="list-unstyled small text-secondary">
                  <li>• Grade Book Management</li>
                  <li>• Teacher Allocation</li>
                  <li>• Automated Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-5" style={{ background: "linear-gradient(to right, #ece9e6, #ffffff)" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold text-primary mb-3">About Dub Technologies</h2>
              <p className="text-muted lead">
                We are pioneering the future of education technology. Our mission is to bridge the gap between resources and students through a seamless, integrated digital ecosystem.
              </p>
              <ul className="list-unstyled text-secondary mt-3">
                <li className="mb-2">✔️ Real-time Student Tracking</li>
                <li className="mb-2">✔️ Secure Payment Integration</li>
                <li className="mb-2">✔️ Comprehensive Analytics</li>
              </ul>
            </div>
            <div className="col-md-6">
              <div className="p-4 rounded-4 shadow-sm text-center text-white" style={{ background: "linear-gradient(45deg, #8e2de2, #4a00e0)" }}>
                <h3>Why Choose Us?</h3>
                <p className="mb-0 opacity-75">Trusted by thousands of students and institutions worldwide.</p>
                <div className="row mt-4">
                  <div className="col-4">
                    <h2 className="fw-bold">10k+</h2>
                    <small>Users</small>
                  </div>
                  <div className="col-4">
                    <h2 className="fw-bold">500+</h2>
                    <small>PDFs</small>
                  </div>
                  <div className="col-4">
                    <h2 className="fw-bold">24/7</h2>
                    <small>Support</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white pt-5 pb-3 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">Dub Technologies</h5>
              <p className="text-white-50 small">Innovating education for a brighter tomorrow.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">Quick Links</h5>
              <ul className="list-unstyled small">
                <li><span className="text-white-50 cursor-pointer" onClick={() => navigate("/pdfs")}>Library</span></li>
                <li><span className="text-white-50 cursor-pointer" onClick={() => navigate("/students")}>Students</span></li>
                <li><span className="text-white-50 cursor-pointer" onClick={() => navigate("/settings")}>Support</span></li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-bold mb-3">Contact</h5>
              <p className="text-white-50 small mb-1">Email: support@dubtech.com</p>
              <p className="text-white-50 small">Phone: +91 987 654 3210</p>
            </div>
          </div>
          <hr className="border-secondary" />
          <div className="text-center text-white-50 small">
            &copy; 2026 Dub Technologies, Inc. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Styles */}
      <style>
        {`
          .card-hover { transition: transform 0.3s ease, box-shadow 0.3s ease; }
          .card-hover:hover { transform: translateY(-7px); box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important; }
          
          .animate-slide-down { animation: slideDown 0.8s ease-out; }
          .animate-fade-in { animation: fadeIn 1.2s ease-out; }
          
          @keyframes slideDown {
            from { transform: translateY(-30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .cursor-pointer { cursor: pointer; }
          .cursor-pointer:hover { color: white !important; }
        `}
      </style>
    </div>
  );
}

export default Home;
