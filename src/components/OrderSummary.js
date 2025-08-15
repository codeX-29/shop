import React from 'react';
import './OrderSummary.css';

const OrderSummary = ({ order, onClose }) => {
  const totalPrice = order.items.reduce((total, item) => {
    return total + (item.price * item.quantity);
  }, 0);

  return (
    <div className="order-summary">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
      
      <div className="order-details bg-white rounded-lg shadow-md p-6 border border-gray-200 mb-6">
        <div className="mb-4">
          <p className="text-gray-600"><strong>Order ID:</strong> {order.id}</p>
          <p className="text-gray-600"><strong>Date:</strong> {order.date}</p>
          <p className="text-gray-600"><strong>Status:</strong> <span className="text-green-600 font-semibold">Processing</span></p>
        </div>
        
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Items:</h3>
        <div className="order-items mb-4">
          {order.items.map(item => (
            <div key={item.id} className="order-item flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-700">{item.name} (x{item.quantity})</span>
              <span className="text-gray-700">₹{item.price * item.quantity}</span>
            </div>
          ))}
        </div>
        
        <div className="flex justify-between items-center pt-4">
          <span className="text-lg font-semibold text-gray-700">Total:</span>
          <span className="text-2xl font-bold text-blue-600">₹{totalPrice}</span>
        </div>
      </div>
      
      <div className="success-message bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
        <p className="font-bold">Order placed successfully!</p>
        <p>Your order has been placed and is now being processed.</p>
      </div>
      
      <button 
        onClick={onClose}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSummary;
