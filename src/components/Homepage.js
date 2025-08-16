import React from "react";
import { Link } from "react-router-dom";

const featuredProducts = [
  {
    id: 1,
    name: "Smart LED Bulb",
    image: "https://th.bing.com/th/id/OIP.JMHL5DZu1HD3I1uEiX_JWgHaHa?w=192&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
    price: "₹499",
  },
  {
    id: 2,
    name: "Smart Home",
    image: "https://uploads-ssl.webflow.com/6058f4fa6bdc453f34be9ffa/60f082fd2a15648529977eac_smart-home-1.jpeg",
    price: "₹299999",
  },
  {
    id: 3,
    name: "Solar Panel Kit",
    image: "https://th.bing.com/th/id/OIP.xxFLXf4DM436k8I8S7ehRQHaE9?w=263&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    price: "₹1999",
  },
];

const Homepage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Welcome to Raghav Electric</h2>

      {/* Featured Products Section */}
      <h3 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {featuredProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p className="text-purple-600 font-bold mb-3">{product.price}</p>
              <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-4 py-2 rounded-full">
                View Product
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
