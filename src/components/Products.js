import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css';

// Sample product data
const productsData = [
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
  },
  {
    id: 4,
    name: "Circuit Breaker",
    price: 899,
    category: "Components",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Power Inverter",
    price: 3499,
    category: "Components",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    name: "Smart Switch",
    price: 1199,
    category: "Home Automation",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 7,
    name: "LED Strip Lights",
    price: 799,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 8,
    name: "Table Lamp",
    price: 399,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 9,
    name: "Wall Switch",
    price: 199,
    category: "Components",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 10,
    name: "Socket Outlet",
    price: 149,
    category: "Components",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 11,
    name: "LED Flood Light",
    price: 899,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 12,
    name: "LED Tube Light",
    price: 299,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 13,
    name: "Solar Water Heater",
    price: 12999,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 14,
    name: "Solar Charger",
    price: 2499,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 15,
    name: "Solar Battery",
    price: 4999,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 16,
    name: "LED Ceiling Light",
    price: 699,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 17,
    name: "LED Street Light",
    price: 1299,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 18,
    name: "LED Corn Light",
    price: 399,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 19,
    name: "LED High Bay Light",
    price: 1499,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 20,
    name: "LED Panel Light",
    price: 599,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 21,
    name: "LED Wall Light",
    price: 499,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 22,
    name: "LED Garden Light",
    price: 799,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 23,
    name: "LED Underwater Light",
    price: 1199,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 24,
    name: "LED Emergency Light",
    price: 399,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 25,
    name: "LED Night Light",
    price: 199,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 26,
    name: "LED Bulb 9W",
    price: 99,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 27,
    name: "LED Bulb 12W",
    price: 129,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 28,
    name: "LED Bulb 15W",
    price: 149,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 29,
    name: "LED Bulb 18W",
    price: 179,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 30,
    name: "LED Bulb 20W",
    price: 199,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 31,
    name: "LED Downlight",
    price: 299,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 32,
    name: "LED Uplight",
    price: 399,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 33,
    name: "LED Spotlight",
    price: 499,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 34,
    name: "LED Decorative Light",
    price: 599,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 35,
    name: "LED String Light",
    price: 699,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 36,
    name: "LED Lamp Shade",
    price: 299,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 37,
    name: "LED Lamp Holder",
    price: 149,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 38,
    name: "LED Lamp Driver",
    price: 199,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 39,
    name: "LED Lamp Dimmer",
    price: 399,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 40,
    name: "LED Lamp Remote",
    price: 299,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 41,
    name: "Solar Street Light",
    price: 2999,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 42,
    name: "Solar Garden Light",
    price: 1999,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 43,
    name: "Solar Security Light",
    price: 3999,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 44,
    name: "Solar Flashlight",
    price: 499,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 45,
    name: "Solar Lantern",
    price: 699,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 46,
    name: "Solar Power Bank",
    price: 1299,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 47,
    name: "Solar Desk Lamp",
    price: 899,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 48,
    name: "Solar Camping Light",
    price: 799,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 49,
    name: "Solar Phone Charger",
    price: 599,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 50,
    name: "Solar Inverter 1000W",
    price: 8999,
    category: "Solar",
    image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

const Products = () => {
  const [products] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const navigate = useNavigate();

  // Get unique categories
  const categories = ['All', ...new Set(productsData.map(product => product.category))];

  // Filter products based on search term and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="products">
      <div className="container">
        <h1>Our Electrical Products</h1>
        <p>Discover a wide range of quality electrical products for your home and business</p>
        
        {/* Search and Filter Section */}
        <div className="filters">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="category-filter"
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        
        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="category">{product.category}</p>
                <p className="price">₹{product.price}</p>
                <button className="btn btn-primary" onClick={() => navigate('/user/login')}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
