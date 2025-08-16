import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    try {
      const parsedCart = JSON.parse(storedCart);

      // Ensure it's an array
      if (Array.isArray(parsedCart)) {
        setCartItems(parsedCart);
      } else {
        setCartItems([]); // fallback if not an array
      }
    } catch (error) {
      console.error('Failed to parse cart from localStorage:', error);
      setCartItems([]);
    }
  }, []);

  return (
    <div>
      <h2>Your Cart ({cartItems.length})</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ₹{item.price * item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
