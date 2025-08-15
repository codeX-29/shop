import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = ({ onPlaceOrder, onRemoveFromCart }) => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);
      // Initialize all items as selected by default
      setSelectedItems(parsedCart.map(item => item.id));
    }
  }, []);

  const handleCheckboxChange = (productId) => {
    if (selectedItems.includes(productId)) {
      setSelectedItems(selectedItems.filter(id => id !== productId));
    } else {
      setSelectedItems([...selectedItems, productId]);
    }
  };

  const handleRemoveItem = (productId) => {
    onRemoveFromCart(productId);
    setSelectedItems(selectedItems.filter(id => id !== productId));
  };

  const handlePlaceOrder = () => {
    // Filter items to place order only for selected items
    const itemsToOrder = cartItems.filter(item => selectedItems.includes(item.id));
    if (itemsToOrder.length === 0) {
      alert('Please select at least one item to place order');
      return;
    }
    
    onPlaceOrder(itemsToOrder);
    
    // Remove selected items from cart
    const updatedCart = cartItems.filter(item => !selectedItems.includes(item.id));
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setSelectedItems([]);
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  const selectedPrice = cartItems
    .filter(item => selectedItems.includes(item.id))
    .reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
        <p className="text-gray-600">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Cart</h2>
      
      <div className="cart-items mb-6">
        {cartItems.map(item => (
          <div 
            key={item.id} 
            className="cart-item bg-white rounded-lg shadow-md p-4 mb-4 flex items-center border border-gray-200"
          >
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => handleCheckboxChange(item.id)}
              className="h-5 w-5 text-blue-600 rounded mr-4"
            />
            <div className="cart-item-image bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
            <div className="flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">Quantity: {item.quantity}</p>
              <p className="text-xl font-bold text-blue-600">₹{item.price * item.quantity}</p>
            </div>
            <button 
              onClick={() => handleRemoveItem(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      
      <div className="cart-summary bg-white rounded-lg shadow-md p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold text-gray-700">Total Price:</span>
          <span className="text-2xl font-bold text-blue-600">₹{totalPrice}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-gray-700">Selected Items Price:</span>
          <span className="text-2xl font-bold text-green-600">₹{selectedPrice}</span>
        </div>
        <button 
          onClick={handlePlaceOrder}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-4 rounded transition-colors"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
