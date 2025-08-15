import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserLogin.css';

const UserLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real application, this would be an API call
    // For now, we'll use dummy authentication
    if (username && password) {
      // Store user info in localStorage to maintain login state
      localStorage.setItem('user', JSON.stringify({ username, role: 'user' }));
      navigate('/user/dashboard');
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <div className="user-login">
      <div className="container">
        <h1>User Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-links">
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <div className="registration-link">
          <p>Don't have an account? <a href="/user/register">Create one</a></p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
