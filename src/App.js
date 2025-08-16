import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import UserRegistration from './components/UserRegistration';
import ShoppingCart from './components/ShoppingCart';
import UserGuide from './components/UserGuide';
import ArchitectureDiagram from './components/ArchitectureDiagram';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';   // ✅ Import new detail page
import './App.css';

function App() {
  // ✅ Keep login state globally
  const [auth, setAuth] = useState({ isLoggedIn: false, role: null });

  // ✅ Function to handle login
  const handleLogin = (role) => {
    setAuth({ isLoggedIn: true, role });
  };

  // ✅ Function to handle logout
  const handleLogout = () => {
    setAuth({ isLoggedIn: false, role: null });
  };

  return (
    <Router>
      <div className="App">
        <Navbar onLogout={handleLogout} auth={auth} />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/products" element={<Products />} />

            {/* ✅ NEW: Product detail route */}
            <Route path="/products/:id" element={<ProductList />} />

            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guide" element={<UserGuide />} />
            <Route path="/architecture" element={<ArchitectureDiagram />} />
            <Route path="/cart" element={<ShoppingCart />} />

            {/* ✅ Pass onLogin to login components */}
            <Route path="/admin/login" element={<AdminLogin onLogin={() => handleLogin('admin')} />} />
            <Route path="/user/login" element={<UserLogin onLogin={() => handleLogin('user')} />} />

            <Route path="/user/register" element={<UserRegistration />} />

            {/* ✅ Protected routes */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute auth={auth} requiredRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/user/dashboard"
              element={
                <ProtectedRoute auth={auth} requiredRole="user">
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
