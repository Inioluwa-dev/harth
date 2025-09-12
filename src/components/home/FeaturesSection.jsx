import React from 'react';

const features = [
  {
    icon: "fa-solid fa-clock",
    title: "Fast Processing",
    description: "Get your images processed in seconds with our optimized AI"
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "High Accuracy",
    description: "Precise edge detection and background removal"
  },
  {
    icon: "fa-solid fa-cloud-arrow-down",
    title: "Bulk Processing",
    description: "Process multiple images at once to save time"
  },
  {
    icon: "fa-solid fa-palette",
    title: "Multiple Formats",
    description: "Support for PNG, JPEG, and other common formats"
  },
  {
    icon: "fa-solid fa-lock",
    title: "Secure Upload",
    description: "Your images are encrypted and automatically deleted"
  },
  {
    icon: "fa-solid fa-headset",
    title: "24/7 Support",
    description: "Get help anytime you need with our support team"
  }
];

const FeaturesSection = () => {

  return (
    <div className="bg-gradient-to-b from-black via-slate-900 to-teal-900 py-20 relative overflow-hidden">
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating AI nodes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        
        {/* Neural network lines */}
        <div className="absolute top-1/3 left-1/3 w-px h-32 bg-gradient-to-b from-teal-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-px h-24 bg-gradient-to-b from-teal-500/20 to-transparent animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/6 w-24 h-px bg-gradient-to-r from-teal-400/20 to-transparent animate-pulse animation-delay-600"></div>
        
        {/* Data particles */}
        <div className="absolute top-1/5 right-1/5 w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
        <div className="absolute bottom-1/3 left-1/5 w-1 h-1 bg-teal-500 rounded-full animate-pulse animation-delay-400"></div>
        <div className="absolute top-3/4 right-1/6 w-1.5 h-1.5 bg-teal-300 rounded-full animate-pulse animation-delay-800"></div>
      </div>

      <div className="container-custom relative z-10">
        <div 
          className="text-center mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Why Choose <span className="text-teal-400">Harth</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Our powerful features and cutting-edge technology make background removal easier than ever before
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
              
              {/* Card content */}
              <div className="relative bg-black/60 backdrop-blur-md p-8 rounded-xl border border-teal-800/40 hover:border-teal-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 group-hover:bg-black/70">
                {/* AI Processing Grid Overlay */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Icon with AI circuit background */}
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    {/* Circuit pattern inside icon */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                      <div className="absolute top-2 left-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute top-2 right-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute bottom-2 right-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-teal-200 rounded-full"></div>
                    </div>
                    <i className={`${feature.icon} text-teal-400 text-2xl group-hover:text-teal-200 transition-colors relative z-10`}></i>
                  </div>
                  {/* Data flow indicators */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse animation-delay-200"></div>
                  <div className="absolute -top-1 -left-2 w-1 h-1 bg-teal-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse animation-delay-400"></div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {feature.description}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* AI Status Panel */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-teal-900/40 to-black/40 rounded-2xl p-8 backdrop-blur-md border border-teal-800/40 relative overflow-hidden">
            {/* AI Status Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            {/* AI Status Header */}
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">AI SYSTEM ONLINE</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Experience the <span className="text-teal-400">AI Difference</span>?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Join thousands of satisfied users who trust our advanced AI for their background removal needs
              </p>
              
              {/* AI Processing Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="flex items-center gap-2 text-teal-400 mb-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">FREE TRIAL</span>
                  </div>
                  <div className="text-white text-sm">No credit card required</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="flex items-center gap-2 text-teal-400 mb-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
                    <span className="text-sm font-mono">INSTANT AI</span>
                  </div>
                  <div className="text-white text-sm">2-5 second processing</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="flex items-center gap-2 text-teal-400 mb-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-400"></div>
                    <span className="text-sm font-mono">99.9% ACCURACY</span>
                  </div>
                  <div className="text-white text-sm">AI-powered precision</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;