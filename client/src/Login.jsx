import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      if (response.status === 200 && response.data.message === "Successful") {
        localStorage.setItem("userEmail", email);
        navigate("/home");
      }
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        setError(err.response.data.error);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card shadow-lg border-0 rounded-4 p-4" style={{ maxWidth: "420px", width: "100%" }}>
        <h2 className="text-center mb-4 fw-bold text-primary">Login Account</h2>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold text-secondary">Email</label>
            <input
              type="email"
              name="email"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold text-secondary">Password</label>
            <input
              type="password"
              name="password"
              className="form-control form-control-lg rounded-3"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg w-100 rounded-3 fw-semibold mb-3"
          >
            Login
          </button>
        </form>

        <div className="text-center">
          <p className="text-muted mb-2">Don't have an account?</p>
          <Link
            to="/register"
            className="btn btn-outline-primary w-100 rounded-3 fw-semibold"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
