import React from 'react';

const ExampleShowcase = () => {
  return (
    <div className="space-y-6 sm:space-y-8 order-3 lg:order-1" >
      <div className="text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
          See the <span className="text-teal-400">Magic</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
          Professional background removal in seconds
        </p>
      </div>
      
      {/* Before/After Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Before Image */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Before</h3>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg">
            <img
              src="/assets/brain.jpg"
              alt="Original brain image"
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        
        {/* After Image */}
        <div className="text-center">
          <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">After</h3>
          <div className="bg-white rounded-xl p-3 sm:p-4 shadow-lg">
            <div 
              className="w-full h-48 sm:h-56 md:h-64 rounded-lg"
              style={{
                backgroundImage: 'url(/assets/checkerboard.svg)',
                backgroundSize: '20px 20px'
              }}
            >
              <img
                src="/assets/brain-transparent.png"
                alt="Brain with transparent background"
                className="w-full h-full object-cover rounded-lg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleShowcase;
