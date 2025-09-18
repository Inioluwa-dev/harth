import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container-custom">
        <div 
          className="bg-gradient-to-r from-teal-900 to-teal-800 rounded-2xl p-8 md:p-12"
          
          
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Remove Backgrounds?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of users who trust our AI-powered background removal tool
            </p>
            <Link 
              to="/remove-bg"
              className="inline-flex items-center space-x-2 bg-white text-teal-900 px-8 py-3 rounded-lg font-medium hover:bg-teal-100 transition-colors"
            >
              <span>Get Started Free</span>
              <i className="fa-solid fa-arrow-right text-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
