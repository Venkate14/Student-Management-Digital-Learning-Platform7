import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="container d-flex flex-column min-vh-100 bg-light">
      <nav className="navbar navbar-light bg-light mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Home</span>
          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>
      <div className="d-flex justify-content-center align-items-center flex-grow-1">
        <h1 className="text-center">Welcome to Home Page</h1>
      </div>
    </div>
  );
}

export default Home;