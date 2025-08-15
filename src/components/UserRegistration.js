import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserRegistration.css';

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.username || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }
    
    // In a real application, this would be an API call
    // For now, we'll store user info in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('engenixUsers') || '[]');
    
    // Check if username already exists
    if (existingUsers.find(user => user.username === formData.username)) {
      setError('Username already exists');
      return;
    }
    
    // Add new user
    const newUsers = [...existingUsers, { 
      username: formData.username, 
      password: formData.password,
      role: 'user'
    }];
    
    localStorage.setItem('engenixUsers', JSON.stringify(newUsers));
    setSuccess(true);
    setError('');
    
    // Reset form
    setFormData({
      username: '',
      password: '',
      confirmPassword: ''
    });
    
    // Navigate to login page after 2 seconds
    setTimeout(() => {
      navigate('/user/login');
    }, 2000);
  };

  return (
    <div className="user-registration">
      <div className="container">
        <h1>Create New Account</h1>
        {success && (
          <div className="success-message">
            Account created successfully! Redirecting to login...
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <button type="submit" className="btn btn-primary">Create Account</button>
        </form>
        
        <div className="login-link">
          <p>Already have an account? <a href="/user/login">Login here</a></p>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
