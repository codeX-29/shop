import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

// Sample product data (in a real app, this would come from a database)
const initialProducts = [
  {
    id: 1,
    name: "LED Bulbs Pack",
    price: 499,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Ceiling Fan",
    price: 1299,
    category: "Appliances",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Solar Panels",
    price: 15999,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

// Sample orders data
const initialOrders = [
  {
    id: 101,
    userId: "user1",
    items: [
      { productId: 1, quantity: 2, price: 499 },
      { productId: 4, quantity: 1, price: 899 }
    ],
    total: 1897,
    date: "2023-05-15",
    status: "Delivered"
  },
  {
    id: 102,
    userId: "user2",
    items: [
      { productId: 2, quantity: 1, price: 1299 },
      { productId: 6, quantity: 3, price: 1199 }
    ],
    total: 4896,
    date: "2023-05-18",
    status: "Processing"
  },
  {
    id: 103,
    userId: "user1",
    items: [
      { productId: 3, quantity: 1, price: 15999 }
    ],
    total: 15999,
    date: "2023-05-20",
    status: "Shipped"
  }
];

// Sample users data
const initialUsers = [
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  { username: "admin", password: "admin123" }
];

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [showProductForm, setShowProductForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    id: null,
    name: '',
    price: '',
    category: '',
    image: ''
  });
  const [currentUser, setCurrentUser] = useState({
    username: '',
    password: ''
  });
  const [editingUser, setEditingUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is admin
  useEffect(() => {
    const adminStatus = localStorage.getItem('isAdminLoggedIn');
    if (!adminStatus) {
      navigate('/admin/login');
    } else {
      setIsAdmin(true);
      setProducts(initialProducts);
      setOrders(initialOrders);
      setUsers(initialUsers);
    }
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsAdmin(false);
    navigate('/');
  };

  // Handle form input changes for products
  const handleProductInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({
      ...currentProduct,
      [name]: value
    });
  };

  // Handle form input changes for users
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({
      ...currentUser,
      [name]: value
    });
  };

  // Handle product form submission
  const handleProductSubmit = (e) => {
    e.preventDefault();
    
    if (currentProduct.id) {
      // Edit existing product
      setProducts(products.map(product => 
        product.id === currentProduct.id ? currentProduct : product
      ));
    } else {
      // Add new product
      const newProduct = {
        ...currentProduct,
        id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
        price: Number(currentProduct.price)
      };
      setProducts([...products, newProduct]);
    }
    
    // Reset form
    setCurrentProduct({
      id: null,
      name: '',
      price: '',
      category: '',
      image: ''
    });
    
    setShowProductForm(false);
  };

  // Handle user form submission
  const handleUserSubmit = (e) => {
    e.preventDefault();
    
    if (editingUser) {
      // Edit existing user
      setUsers(users.map(user => 
        user.username === editingUser ? { ...user, ...currentUser } : user
      ));
    } else {
      // Add new user
      setUsers([...users, currentUser]);
    }
    
    // Reset form
    setCurrentUser({
      username: '',
      password: ''
    });
    
    setEditingUser(null);
    setShowUserForm(false);
  };

  // Handle edit product
  const handleEdit = (product) => {
    setCurrentProduct(product);
    setShowProductForm(true);
  };

  // Handle delete product
  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  // Handle edit user
  const handleEditUser = (user) => {
    setCurrentUser({ username: user.username, password: user.password });
    setEditingUser(user.username);
    setShowUserForm(true);
  };

  // Handle delete user
  const handleDeleteUser = (username) => {
    if (username === 'admin') {
      alert('Cannot delete admin user');
      return;
    }
    
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(user => user.username !== username));
    }
  };

  // Cancel form
  const handleCancel = () => {
    setCurrentProduct({
      id: null,
      name: '',
      price: '',
      category: '',
      image: ''
    });
    setShowProductForm(false);
  };

  if (!isAdmin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      {/* Rest of your component JSX remains unchanged */}
      {/* ... */}
    </div>
  );
};

export default AdminDashboard;
