import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, requiredRole }) => {
  // Check user authentication status
  const isAdminLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
  const user = localStorage.getItem('user');
  
  // Redirect based on role requirements
  if (requiredRole === 'admin' && !isAdminLoggedIn) {
    return <Navigate to="/admin/login" />;
  }
  
  if (requiredRole === 'user' && !user) {
    return <Navigate to="/user/login" />;
  }
  
  // If user is logged in but trying to access admin route, redirect to user dashboard
  if (requiredRole === 'admin' && user && !isAdminLoggedIn) {
    return <Navigate to="/user/dashboard" />;
  }
  
  // If admin is logged in but trying to access user route, redirect to admin dashboard
  if (requiredRole === 'user' && isAdminLoggedIn && !user) {
    return <Navigate to="/admin/dashboard" />;
  }
  
  return children;
};

export default ProtectedRoute;
