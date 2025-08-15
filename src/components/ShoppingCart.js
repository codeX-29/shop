import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import OrderSummary from './OrderSummary';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  // Load cart from localStorage on component mount
  React.useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    let updatedCart;
    
    if (existingItem) {
      updatedCart = cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const placeOrder = (itemsToOrder) => {
    const newOrder = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      items: itemsToOrder
    };
    
    setOrders([...orders, newOrder]);
    setCurrentOrder(newOrder);
    setShowOrderSummary(true);
  };

  const closeOrderSummary = () => {
    setShowOrderSummary(false);
    setCurrentOrder(null);
  };

  if (showOrderSummary && currentOrder) {
    return <OrderSummary order={currentOrder} onClose={closeOrderSummary} />;
  }

  return (
    <div className="shopping-cart">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProductList onAddToCart={addToCart} />
          </div>
          
          <div className="lg:col-span-1">
            <Cart 
              onPlaceOrder={placeOrder} 
              onRemoveFromCart={removeFromCart} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
