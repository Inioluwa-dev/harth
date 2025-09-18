import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-black via-slate-900 to-teal-900 relative overflow-hidden">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating AI nodes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/8 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-600/6 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        
        {/* Neural network lines */}
        <div className="absolute top-1/3 left-1/3 w-px h-24 bg-gradient-to-b from-teal-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-px h-16 bg-gradient-to-b from-teal-500/20 to-transparent animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/6 w-20 h-px bg-gradient-to-r from-teal-400/20 to-transparent animate-pulse animation-delay-600"></div>
        
        {/* Data particles */}
        <div className="absolute top-1/5 right-1/5 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-teal-500 rounded-full animate-pulse animation-delay-400"></div>
        <div className="absolute top-3/4 right-1/6 w-1 h-1 bg-teal-300 rounded-full animate-pulse animation-delay-800"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8 md:mb-12">
            {/* Brand Section */}
            <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  <span className="text-teal-400">Harth</span>
                </h3>
                <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-md mx-auto sm:mx-0">
                  Powered by advanced AI technology to remove backgrounds from your images in seconds. 
                  Professional results, lightning-fast processing.
                </p>
              </div>
              
              {/* AI Status Indicator */}
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-6">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">AI SYSTEM ONLINE</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm md:text-base">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/remove-bg" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm md:text-base">
                    Remove Background
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm md:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-teal-400 transition-colors duration-200 text-sm md:text-base">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Features */}
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm">AI-Powered Processing</li>
                <li className="text-gray-400 text-sm">Batch Upload</li>
                <li className="text-gray-400 text-sm">HD Quality Output</li>
                <li className="text-gray-400 text-sm">Multiple Formats</li>
                <li className="text-gray-400 text-sm">Privacy First</li>
              </ul>
            </div>
          </div>

          {/* Social Media & Stats */}
          <div className="border-t border-teal-800/40 pt-6 md:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              {/* Social Media Icons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <span className="text-gray-400 text-sm font-medium">Follow Us:</span>
                <div className="flex gap-3 md:gap-4">
                  <a 
                    href="https://www.instagram.com/inioluwa_dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    <i className="fab fa-instagram text-white text-base md:text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/olayoriju-inioluwa-116399383/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <i className="fab fa-linkedin-in text-white text-base md:text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a 
                    href="https://github.com/Inioluwa-dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25"
                  >
                    <i className="fab fa-github text-white text-base md:text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                  <a 
                    href="https://x.com/Inioluwa_dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-black to-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/25"
                  >
                    <i className="fab fa-x-twitter text-white text-base md:text-lg group-hover:scale-110 transition-transform"></i>
                  </a>
                </div>
              </div>

              {/* AI Processing Stats */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs md:text-sm">
                <div className="flex items-center gap-2 text-teal-400">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="font-mono">99.9% Accuracy</span>
                </div>
                <div className="flex items-center gap-2 text-teal-400">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
                  <span className="font-mono">2-5s Processing</span>
                </div>
                <div className="flex items-center gap-2 text-teal-400">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-400"></div>
                  <span className="font-mono">1M+ Images</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-800/40 py-4 md:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 md:gap-4">
            {/* Copyright */}
            <div className="text-center sm:text-left order-2 sm:order-1">
              <p className="text-gray-400 text-xs md:text-sm">
                © {currentYear} <span className="text-teal-400 font-semibold">Comibyte Team</span>. All rights reserved.
              </p>
            </div>

            {/* Made by */}
            <div className="text-center sm:text-right order-1 sm:order-2">
              <p className="text-gray-500 text-xs md:text-sm">
                Made by 
                <span className="text-teal-400 font-semibold ml-1">Mr Heritage</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
