import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './AdminLogin.css';

// ------------------- Admin Login -------------------
const AdminLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (credentials.username === 'admin' && credentials.password === 'admin123') {
      const today = new Date().toISOString().split("T")[0]; // yyyy-mm-dd
      const currentUser = {
        role: "admin",
        loginDate: today
      };

      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem("isAdminLoggedIn", "true");
      onLogin(true);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login">
      <div className="container">
        <div className="login-card">
          <h1>Admin Login</h1>
          <p>Access the Engenix Admin Dashboard</p>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={credentials.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

// ------------------- Product Dashboard -------------------
const ProductDashboard = ({ canPerformAdminTasks, onLogout }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'LED Bulb', price: 50 },
    { id: 2, name: 'Wire 10m', price: 120 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', price: '' });

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (!canPerformAdminTasks) {
      alert("Access Denied: You cannot add products today.");
      return;
    }
    if (newProduct.name && newProduct.price) {
      setProducts([
        ...products,
        { id: Date.now(), name: newProduct.name, price: parseFloat(newProduct.price) },
      ]);
      setNewProduct({ name: '', price: '' });
    }
  };

  const handleDelete = (id) => {
    if (!canPerformAdminTasks) {
      alert("Access Denied: You cannot delete products today.");
      return;
    }
    setProducts(products.filter((p) => p.id !== id));
  };

  const handlePriceChange = (id, newPrice) => {
    if (!canPerformAdminTasks) {
      alert("Access Denied: You cannot update prices today.");
      return;
    }
    setProducts(products.map((p) => (p.id === id ? { ...p, price: parseFloat(newPrice) } : p)));
  };

  return (
    <div className="product-dashboard">
      <h1>Admin Dashboard - Product Management</h1>

      <button onClick={onLogout} style={{ marginBottom: "20px" }}>Logout</button>

      {canPerformAdminTasks ? (
        <div className="add-product">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleInputChange}
          />
          <button onClick={handleAddProduct}>Add Product</button>
        </div>
      ) : (
        <p style={{ color: "red" }}>⚠️ You don’t have admin privileges today.</p>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            {canPerformAdminTasks && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>
                {canPerformAdminTasks ? (
                  <input
                    type="number"
                    value={p.price}
                    onChange={(e) => handlePriceChange(p.id, e.target.value)}
                  />
                ) : (
                  p.price
                )}
              </td>
              {canPerformAdminTasks && (
                <td>
                  <button onClick={() => handleDelete(p.id)}>Delete</button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// ------------------- Main App -------------------
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isAdminLoggedIn') === 'true');

  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
  const today = new Date().toISOString().split("T")[0];

  const canPerformAdminTasks =
    currentUser.role === "admin" && currentUser.loginDate === today;

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <ProductDashboard
              canPerformAdminTasks={canPerformAdminTasks}
              onLogout={handleLogout}
            />
          ) : (
            <AdminLogin onLogin={setIsLoggedIn} />
          )
        }
      />
    </Routes>
  );
};

export default App;
