import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './UserGuide.css';

const UserGuide = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: "Welcome to Engenix Shopping!",
      content: "This guide will walk you through placing your first order.",
      image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Step 1: User Login",
      content: "Navigate to /user/login and enter any username and password. There's no real verification yet, so you can use any credentials to access the dashboard.",
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Step 2: Add Products to Cart",
      content: "Browse the product list on your dashboard. Click 'Add to Cart' on any product you want to purchase. Your cart will automatically update with the product name, quantity, and price.",
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Step 3: Place an Order",
      content: "Scroll to the 'Your Cart' section. Double-check your items and quantities. Click 'Place Order' to submit your order. You'll see an alert confirming 'Order placed successfully!'",
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Step 4: Manage Your Orders",
      content: "After placing orders, they appear in your 'Your Orders' list. Depending on status, you can track, cancel, request refunds, or make payments for your orders.",
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "Behind the Scenes",
      content: "All data (login, cart, orders) is currently stored in your browser's localStorage. In a production environment, this would be replaced with secure backend storage and real authentication.",
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      title: "You're Ready to Go!",
      content: "That's it! You now know how to place and manage orders in our system. Try adding some products to your cart and placing an order.",
      image: "https://images.unsplash.com/photo-1510017803434-a82f0988761d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="user-guide min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Place an Order</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow this simple guide to learn how to shop with Engenix
          </p>
        </motion.div>

        {/* Progress bar */}
        <div className="mb-8 h-2 bg-gray-200 rounded-full overflow-hidden max-w-3xl mx-auto">
          <motion.div 
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8"
            >
              <div className="mb-6">
                <img 
                  src={steps[currentStep].image} 
                  alt={steps[currentStep].title}
                  className="w-full h-64 object-cover rounded-xl shadow-md"
                />
              </div>
              
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-4 text-gray-800"
              >
                {steps[currentStep].title}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 mb-6 text-lg"
              >
                {steps[currentStep].content}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="step-counter text-center text-gray-500 mb-6"
              >
                Step {currentStep + 1} of {steps.length}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="flex justify-between max-w-3xl mx-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-6 py-3 rounded-xl font-medium text-lg ${
              currentStep === 0 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Previous
          </motion.button>
          
          {currentStep < steps.length - 1 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextStep}
              className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium text-lg hover:bg-green-600"
            >
              Next
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/user/login'}
              className="px-6 py-3 bg-green-500 text-white rounded-xl font-medium text-lg hover:bg-green-600"
            >
              Start Shopping
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserGuide;
