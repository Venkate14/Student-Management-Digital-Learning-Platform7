import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then((result) => {
        console.log(result);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ maxWidth: '420px', width: '100%' }}>
        <h2 className="text-center mb-4 fw-bold text-primary">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Name</label>
            <input
              type="text"
              name="name"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold mb-3">
            Register
          </button>
        </form>
        <div className="text-center">
          <p className="text-muted mb-2">Already have an account?</p>
          <Link to="/login" className="btn btn-outline-primary w-100 rounded-3 fw-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
