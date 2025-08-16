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
    image: "https://kosilight.uk/12910-thickbox_default/huge-30cm-bulb-with-twisted-filament-e27-4w.jpg"
  },
  {
    id: 2,
    name: "Ceiling Fan",
    price: 1299,
    category: "Appliances",
    image: "https://m.media-amazon.com/images/I/81pZcNzZOwL.jpg"
  },
  {
    id: 3,  
    name: "Solar Panels",
    price: 15999,
    category: "Solar",
    image: "https://tse1.mm.bing.net/th/id/OIP.IocyrBHQYr7iYwDC1im5qAHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    name: "Circuit Breaker",
    price: 899,
    category: "Components",
    image: "https://www.thespruce.com/thmb/hghLc6UscZ9OJB2HRE6lCJb3mro=/2000x0/filters:no_upscale():max_bytes(150000):strip_icc()/safely-install-a-circuit-breaker-1152745-08-6f6a59afc5a24dd189ef645617d1ee54.jpg"
  },
  {
    id: 5,
    name: "Power Inverter",
    price: 3499,
    category: "Components",
    image: "https://tse1.mm.bing.net/th/id/OIP.cYCiKi_hUXLPc4vQ4LEwOQHaFs?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 6,
    name: "Smart Switch",
    price: 1199,
    category: "Home Automation",
    image: "https://tse2.mm.bing.net/th/id/OIP.gXKNlIXWYcjHOGcl8xX3gwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    name: "LED Strip Lights",
    price: 799,
    category: "Lighting",
    image: "https://tse2.mm.bing.net/th/id/OIP.GBNxhrIT6eDy4dZ7wEDqawHaE7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 8,
    name: "Table Lamp",
    price: 399,
    category: "Lighting",
    image: "https://5.imimg.com/data5/SELLER/Default/2020/11/CL/NO/WE/97653226/antique-table-lamp-1000x1000.jpg"
  },
  {
    id: 9,
    name: "Wall Switch",
    price: 199,
    category: "Components",
    image: "https://stylesatlife.com/wp-content/uploads/2023/10/Modern-Electric-Switch-Board-Design-for-House.jpg"
  },
  {
    id: 10,
    name: "Socket Outlet",
    price: 149,
    category: "Components",
    image: "https://th.bing.com/th/id/OIP.b2xXzJPIAFRNQCXD0YjQSQHaHa?w=180&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 11,
    name: "LED Flood Light",
    price: 899,
    category: "Lighting",
    image: "https://i.ytimg.com/vi/xqfEBkAvlkk/maxresdefault.jpg"
  },
  {
    id: 12,
    name: "LED Tube Light",
    price: 299,
    category: "Lighting",
    image: "https://tse4.mm.bing.net/th/id/OIP.TeExfiaHLKq7jrK39WisqwHaEp?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 13,
    name: "Solar Water Heater",
    price: 12999,
    category: "Solar",
    image: "https://tse3.mm.bing.net/th/id/OIP.46FOrLwcjmsfQxUbenNTnQHaDr?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 14,
    name: "Solar Charger",
    price: 2499,
    category: "Solar",
    image: "https://th.bing.com/th/id/OIP.sMO9858pJGep9VPWRBShUAHaEo?w=257&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
  },
  {
    id: 15,
    name: "Solar Battery",
    price: 4999,
    category: "Solar",
    image: "https://tse1.mm.bing.net/th/id/OIP.c39LJRrX0Wg0ffn3MN3rCwAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 16,
    name: "LED Ceiling Light",
    price: 699,
    category: "Lighting",
    image: "https://imgaz.staticbg.com/images/oaupload/ser1/banggood/images/1E/96/4aaa4b57-1526-4cf6-ae06-ec14d97262e9.jpg"
  },
  {
    id: 17,
    name: "LED Street Light",
    price: 1299,
    category: "Lighting",
    image: "https://tse2.mm.bing.net/th/id/OIP.kLRS89P7Qqdb6LktXcrqvwHaHB?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 18,
    name: "LED Corn Light",
    price: 399,
    category: "Lighting",
    image: "https://m.media-amazon.com/images/I/71+mOfUDD1L._AC_SL1500_.jpg"
  },
  {
    id: 19,
    name: "LED High Bay Light",
    price: 1499,
    category: "Lighting",
    image: "https://tse4.mm.bing.net/th/id/OIP.uiV_HoCeuZONK9UCijUk7AHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 20,
    name: "LED Panel Light",
    price: 599,
    category: "Lighting",
    image: "https://image.made-in-china.com/2f0j00wdHTVQUKEBke/Daylight-5000k-6500k-600X1200-LED-Panel-Light-2X4-72W.jpg"
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
