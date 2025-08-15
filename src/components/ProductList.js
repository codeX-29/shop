import React from 'react';
import './ProductList.css';

const ProductList = ({ onAddToCart }) => {
  // Static product list
  const products = [
    { id: 1, name: 'LED Bulbs Pack', price: 499 },
    { id: 2, name: 'Ceiling Fan', price: 1299 },
    { id: 3, name: 'Solar Panels', price: 15999 },
    { id: 4, name: 'Circuit Breaker', price: 899 },
    { id: 5, name: 'Power Inverter', price: 3499 },
    { id: 6, name: 'Smart Switch', price: 1199 },
    { id: 7, name: 'LED Strip Lights', price: 799 },
    { id: 8, name: 'Table Lamp', price: 399 },
    { id: 9, name: 'Wall Switch', price: 199 },
    { id: 10, name: 'Socket Outlet', price: 149 },
    { id: 11, name: 'LED Flood Light', price: 899 },
    { id: 12, name: 'LED Tube Light', price: 299 },
    { id: 13, name: 'Solar Water Heater', price: 12999 },
    { id: 14, name: 'Solar Charger', price: 2499 },
    { id: 15, name: 'Solar Battery', price: 4999 },
    { id: 16, name: 'LED Ceiling Light', price: 699 },
    { id: 17, name: 'LED Street Light', price: 1299 },
    { id: 18, name: 'LED Corn Light', price: 399 },
    { id: 19, name: 'LED High Bay Light', price: 1499 },
    { id: 20, name: 'LED Panel Light', price: 599 }
  ];

  return (
    <div className="product-list">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Available Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div 
            key={product.id} 
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="product-image bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{product.name}</h3>
            <p className="text-xl font-bold mb-4 text-blue-600">₹{product.price}</p>
            <button 
              onClick={() => onAddToCart(product)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
