import React from 'react';

const features = [
  {
    icon: "fa-solid fa-brain",
    title: "Advanced AI",
    description: "Our AI model is trained on millions of images for precise detection",
    highlight: "99.9% accuracy"
  },
  {
    icon: "fa-solid fa-gears",
    title: "Smart Processing",
    description: "Automatic adjustment for different image types and conditions",
    highlight: "Auto-optimization"
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Fast Processing",
    description: "Process images in seconds with our optimized algorithms",
    highlight: "2-5 seconds per image"
  },
  {
    icon: "fa-solid fa-fingerprint",
    title: "Edge Detection",
    description: "Precise edge detection even for complex objects and hair",
    highlight: "HD quality edges"
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Privacy First",
    description: "Your images are processed securely and deleted automatically",
    highlight: "End-to-end encryption"
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Smart Touch-up",
    description: "Automatic enhancement of edges and transparency",
    highlight: "Auto-enhancement"
  }
];

const TechnologySection = () => {

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
          
          
        >
          <span className="text-teal-400 text-sm font-semibold tracking-wider uppercase">
            Powered by AI
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            <span className="text-teal-400">Cutting-Edge</span> Technology
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Our advanced AI technology ensures the best possible results for your images
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative"
              
            >
              {/* AI Processing Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-200 blur-lg"></div>
              
              {/* Content */}
              <div className="relative bg-black/60 backdrop-blur-md p-8 rounded-xl h-full border border-teal-800/40 hover:border-teal-500/60 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 group-hover:bg-black/70">
                {/* AI Grid Overlay */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-200">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Icon with AI circuit */}
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 relative overflow-hidden">
                    {/* Circuit pattern */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-200">
                      <div className="absolute top-2 left-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute top-2 right-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute bottom-2 right-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-teal-200 rounded-full"></div>
                    </div>
                    <i className={`${feature.icon} text-2xl text-teal-400 group-hover:text-teal-200 transition-colors duration-200 relative z-10`}></i>
                  </div>
                  {/* Data flow indicators */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse animation-delay-200"></div>
                  <div className="absolute -top-1 -left-2 w-1 h-1 bg-teal-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse animation-delay-400"></div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-200">
                  {feature.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-200 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Highlight with AI styling */}
                <div className="bg-teal-900/30 text-teal-400 text-sm py-2 px-4 rounded-full inline-block group-hover:bg-teal-800/40 group-hover:text-teal-200 transition-all duration-200 hover:scale-105">
                  {feature.highlight}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* AI Technology Stats */}
        <div className="mt-16 animate-fade-in-up animation-delay-600">
          <div className="bg-gradient-to-r from-teal-900/40 to-black/40 rounded-2xl p-8 backdrop-blur-md border border-teal-800/40 relative overflow-hidden">
            {/* AI Grid */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(20, 184, 166, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(20, 184, 166, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '30px 30px'
              }}></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-mono">AI TECHNOLOGY STACK ACTIVE</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-teal-400">Advanced AI</span> Processing Pipeline
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Our neural networks are trained on millions of images for maximum accuracy
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="text-2xl font-bold text-teal-400 mb-1">99.9%</div>
                  <div className="text-gray-400 text-sm">Accuracy Rate</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="text-2xl font-bold text-teal-400 mb-1">2-5s</div>
                  <div className="text-gray-400 text-sm">Processing Time</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="text-2xl font-bold text-teal-400 mb-1">10M+</div>
                  <div className="text-gray-400 text-sm">Images Trained</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="text-2xl font-bold text-teal-400 mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">AI Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
