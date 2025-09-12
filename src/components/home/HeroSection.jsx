import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-teal-900 to-black text-white min-h-screen flex items-center">
      <div className="container-custom w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" data-aos="fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight" data-aos="fade-up" data-aos-delay="100">
              Remove Background from Images <span className="text-teal-400 animate-pulse">Instantly</span>
            </h1>
            <p className="text-lg text-gray-300" data-aos="fade-up" data-aos-delay="200">
              Professional-grade background removal powered by AI. Fast, accurate, and easy to use.
            </p>
            <div className="flex flex-row gap-3 sm:gap-6 items-center justify-center flex-wrap" data-aos="fade-up" data-aos-delay="300">
              <div className="transform hover:scale-105 transition-all duration-300">
                <Link
                  to="/remove-bg"
                  className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold flex items-center space-x-2 sm:space-x-3 transform transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 min-w-[140px] sm:min-w-[200px] justify-center text-sm sm:text-base"
                >
                  <i className="fas fa-wand-magic-sparkles text-lg sm:text-xl"></i>
                  <span>Try Now</span>
                </Link>
              </div>
              <div className="transform hover:scale-105 transition-all duration-300">
                <a
                  href="#how-it-works"
                  className="border-2 border-white/30 hover:border-teal-400 hover:text-teal-400 bg-white/5 hover:bg-teal-500/10 backdrop-blur-sm px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center min-w-[140px] sm:min-w-[200px] text-sm sm:text-base"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4" data-aos="fade-left" data-aos-delay="400">
            <div className="space-y-4">
              <div className="bg-teal-800/50 p-6 rounded-xl hover:bg-teal-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 hover:-translate-y-2 animate-float" data-aos="zoom-in" data-aos-delay="500">
                <i className="fas fa-cloud-upload-alt text-4xl text-teal-400 mb-2"></i>
                <h3 className="font-semibold">Easy Upload</h3>
                <p className="text-sm text-gray-300">Drag & drop or click to upload</p>
              </div>
              <div className="bg-teal-800/50 p-6 rounded-xl hover:bg-teal-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 hover:-translate-y-2 animate-float" data-aos="zoom-in" data-aos-delay="600">
                <i className="fas fa-wand-magic-sparkles text-4xl text-teal-400 mb-2"></i>
                <h3 className="font-semibold">AI Processing</h3>
                <p className="text-sm text-gray-300">Advanced AI technology</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-teal-800/50 p-6 rounded-xl hover:bg-teal-800/70 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 transform hover:scale-105 hover:-translate-y-2 animate-float" data-aos="zoom-in" data-aos-delay="700">
                <i className="fas fa-download text-4xl text-teal-400 mb-2"></i>
                <h3 className="font-semibold">Quick Download</h3>
                <p className="text-sm text-gray-300">Get your image instantly</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
      </div>
    </div>
  );
};

export default HeroSection;