import React from "react";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smart LED Bulb",
    image: "https://th.bing.com/th/id/OIP.JMHL5DZu1HD3I1uEiX_JWgHaHa?w=192&h=194&c=7&r=0&o=7&pid=1.7&rm=3",
    price: "₹499",
    description: "Energy-efficient smart LED bulb with app control.",
  },
  {
    id: 2,
    name: "Smart Home",
    image: "https://uploads-ssl.webflow.com/6058f4fa6bdc453f34be9ffa/60f082fd2a15648529977eac_smart-home-1.jpeg",
    price: "₹299999",
    description: "Complete smart home automation system.",
  },
  {
    id: 3,
    name: "Solar Panel Kit",
    image: "https://th.bing.com/th/id/OIP.xxFLXf4DM436k8I8S7ehRQHaE9?w=263&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    price: "₹1999",
    description: "Affordable solar panel kit for household use.",
  },
];

const ProductList = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 className="text-center text-red-500 text-2xl mt-10">Product not found!</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-80 object-cover" />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-xl text-purple-600 font-semibold mb-2">{product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
