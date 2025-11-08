import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdEmail, MdLock } from "react-icons/md";
import "./Auth.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!username || !password) {
      setError("Email address and password are required.");
      setLoading(false);
      return;
    }

    try {
      await login(username, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = () => navigate("/signup");
  const handleForgotPassword = () => alert("Forgot password functionality to be implemented.");

  return (
    <div className="auth-page-container">
      <div className="auth-form-side">
        <div className="logo-section">
          <div className="network-logo">
            <span className="logo-lines">|||</span>
            <span>HealthHub</span>
          </div>
          <h3 className="login-intro">Login into your account</h3>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <div className="input-with-icon">
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                placeholder="Enter your user name"
                required
              />
              <span className="input-icon"><MdEmail /></span>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="input-with-icon">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                placeholder="Enter your password"
                required
              />
              <span className="input-icon"><MdLock /></span>
            </div>
            <button type="button" className="forgot-password" onClick={handleForgotPassword} disabled={loading}>
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? "Logging in..." : "Login now"}
          </button>
        </form>

        <div className="or-separator">
          <hr />
          <span>OR</span>
          <hr />
        </div>

        <button type="button" className="signup-button" onClick={handleSignup} disabled={loading}>
          Signup now
        </button>
      </div>

      <div className="auth-illustration-side">
        <img src="/login.svg" alt="Hospital Illustration" className="illustration-img" />
      </div>
    </div>
  );
};

export default Login;
