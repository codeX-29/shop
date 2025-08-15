import React from 'react';
import './LatestFlowers.css';

const LatestFlowers = ({ onAddToCart }) => {
  // Sample flower data
  const flowers = [
    {
      id: 1,
      name: "Red Roses Bouquet",
      price: 499,
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 2,
      name: "Sunflower Arrangement",
      price: 399,
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 3,
      name: "Tulip Collection",
      price: 599,
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 4,
      name: "Lily Bunch",
      price: 449,
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 5,
      name: "Orchid Deluxe",
      price: 799,
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 6,
      name: "Carnation Mix",
      price: 299,
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 7,
      name: "Peony Bundle",
      price: 699,
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    },
    {
      id: 8,
      name: "Daisy Garden",
      price: 349,
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
    }
  ];

  return (
    <div className="latest-flowers">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-pink-500">🌸 Latest Flowers</h2>
        
        <div className="flowers-grid">
          {flowers.map(flower => (
            <div 
              key={flower.id} 
              className="flower-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <img 
                src={flower.image} 
                alt={flower.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{flower.name}</h3>
                <p className="text-2xl font-bold mb-4 text-pink-500">₹{flower.price}</p>
                <button 
                  onClick={() => onAddToCart(flower)}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
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

export default LatestFlowers;
