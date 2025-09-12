import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after 2 seconds - reduced by 0.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000); // Reduced by 0.5 seconds from 2500ms to 2000ms

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-teal-900 via-black to-teal-800 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse animation-delay-500"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 text-center">
        {/* Rolling H Animation */}
        <div className="mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 via-teal-500/30 to-teal-400/20 animate-pulse"></div>
            
            {/* Main Circle Container */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-teal-900/80 via-black/90 to-teal-800/80 backdrop-blur-sm border border-teal-400/40 animate-spin-slow">
              {/* Inner Glow Effect */}
              <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-teal-500/10 to-transparent"></div>
              
              {/* Rolling H Letter with Multiple Effects */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  {/* H Shadow/Glow */}
                  <div className="absolute inset-0 text-6xl md:text-8xl font-black text-teal-400/30 blur-sm animate-roll">
                    H
                  </div>
                  {/* Main H */}
                  <div className="relative text-6xl md:text-8xl font-black text-white animate-roll">
                    H
                  </div>
                  {/* H Highlight */}
                  <div className="absolute inset-0 text-6xl md:text-8xl font-black bg-gradient-to-br from-white/40 to-transparent bg-clip-text text-transparent animate-roll">
                    H
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rotating Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-teal-400/40 animate-spin-slow"></div>
            <div className="absolute inset-1 rounded-full border border-teal-500/60 animate-spin-reverse"></div>
            <div className="absolute inset-3 rounded-full border border-teal-300/40 animate-spin-slow"></div>
            
            {/* Orbiting Dots */}
            <div className="absolute inset-0 animate-orbit">
              <div className="absolute top-0 left-1/2 w-2 h-2 bg-teal-400 rounded-full transform -translate-x-1/2 -translate-y-1"></div>
            </div>
            <div className="absolute inset-0 animate-orbit-reverse">
              <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-teal-500 rounded-full transform -translate-x-1/2 translate-y-1"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white animate-fade-in-up">
            Remove<span className="text-teal-400">BG</span>
          </h2>
          <p className="text-gray-300 text-lg animate-fade-in-up animation-delay-200">
            AI-Powered Background Removal
          </p>
          
          {/* Loading Dots */}
          <div className="flex justify-center space-x-2 animate-fade-in-up animation-delay-400">
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce animation-delay-400"></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-teal-500 to-teal-400 rounded-full animate-progress-bar"></div>
          </div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-1/5 w-2 h-2 bg-teal-400 rounded-full animate-float animation-delay-200"></div>
        <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-teal-500 rounded-full animate-float animation-delay-400"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-teal-300 rounded-full animate-float animation-delay-600"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-teal-400 rounded-full animate-float animation-delay-800"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
