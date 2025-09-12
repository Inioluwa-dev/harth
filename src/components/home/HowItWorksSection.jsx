import React from 'react';

const steps = [
  {
    icon: "fa-solid fa-cloud-arrow-up",
    title: "Upload Image",
    description: "Upload your image in any common format (PNG, JPEG, WebP, etc.)",
    details: "Supports up to 25MB files with automatic format detection",
    number: "1",
    time: "Instant",
    features: ["Drag & Drop", "Batch Upload", "Format Detection"]
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "AI Processing",
    description: "Advanced neural networks analyze and remove backgrounds with precision",
    details: "Our AI uses deep learning to identify subjects and create perfect cutouts",
    number: "2",
    time: "2-5 seconds",
    features: ["Edge Detection", "Hair Analysis", "Object Recognition"]
  },
  {
    icon: "fa-solid fa-download",
    title: "Download Result",
    description: "Get your processed image in high quality with transparent background",
    details: "Download in PNG, JPEG, or other formats with full resolution",
    number: "3",
    time: "Instant",
    features: ["HD Quality", "Multiple Formats", "No Watermark"]
  }
];

const HowItWorksSection = () => {

  return (
    <div id="how-it-works" className="bg-gradient-to-b from-teal-900 via-teal-800 to-black py-20 relative overflow-hidden">
      {/* AI Processing Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating data streams */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-400/8 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-600/6 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        
        {/* Data flow lines */}
        <div className="absolute top-1/3 left-1/6 w-32 h-px bg-gradient-to-r from-teal-400/30 to-transparent animate-pulse"></div>
        <div className="absolute top-2/3 right-1/6 w-24 h-px bg-gradient-to-l from-teal-500/30 to-transparent animate-pulse animation-delay-300"></div>
        <div className="absolute top-1/2 left-1/3 w-px h-20 bg-gradient-to-b from-teal-400/20 to-transparent animate-pulse animation-delay-600"></div>
        
        {/* Processing indicators */}
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
            AI Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            How Our <span className="text-teal-400">AI Works</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our advanced AI processes your images through three intelligent stages
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center group"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 200)}
            >
              {/* AI Processing Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-200 blur-lg"></div>
              
              {/* Step number with AI styling */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                <div className="relative">
                  <div className="bg-gradient-to-br from-teal-400 to-teal-600 w-12 h-12 rounded-full flex items-center justify-center font-bold text-black shadow-lg group-hover:scale-110 transition-transform duration-200">
                    {step.number}
                  </div>
                  {/* AI processing ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-teal-400/30 group-hover:border-teal-400/60 animate-pulse"></div>
                </div>
              </div>

              {/* Content with AI theme */}
              <div className="relative bg-black/80 backdrop-blur-md p-8 rounded-xl pt-16 border border-teal-800/60 hover:border-teal-500/80 transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 group-hover:bg-black/90">
                {/* AI Grid Overlay */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-200">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(20, 184, 166, 0.2) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(20, 184, 166, 0.2) 1px, transparent 1px)
                    `,
                    backgroundSize: '25px 25px'
                  }}></div>
                </div>

                {/* Icon with AI circuit */}
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 w-20 h-20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 relative overflow-hidden">
                    {/* Circuit pattern */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-200">
                      <div className="absolute top-2 left-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute top-2 right-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute bottom-2 right-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-teal-200 rounded-full"></div>
                    </div>
                    <div className="text-teal-400 text-4xl group-hover:text-teal-200 transition-colors duration-200 relative z-10">
                      <i className={`${step.icon}`}></i>
                    </div>
                  </div>
                  {/* Data flow indicators */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse animation-delay-200"></div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-200 leading-relaxed mb-3">
                  {step.description}
                </p>
                
                {/* Additional details */}
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors duration-200">
                  {step.details}
                </p>

                {/* Processing time */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="text-teal-400 text-sm font-mono">{step.time}</span>
                </div>

                {/* Features list */}
                <div className="space-y-2 mb-4">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                      <div className="w-1 h-1 bg-teal-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Enhanced connector line with AI theme */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 -translate-y-1/2 z-0">
                  <div className="h-full bg-gradient-to-r from-teal-400/30 via-teal-500/50 to-teal-400/30 animate-pulse"></div>
                  <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AI Processing Summary */}
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
                <span className="text-green-400 text-sm font-mono">AI PROCESSING PIPELINE ACTIVE</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-teal-400">3-Step AI Process</span> in Under 5 Seconds
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Our neural networks analyze, process, and optimize your images with precision
              </p>
              
              {/* Process Flow */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <div className="flex items-center gap-2 text-teal-400">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono">UPLOAD</span>
                </div>
                <div className="hidden sm:block text-teal-400">→</div>
                <div className="flex items-center gap-2 text-teal-400">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
                  <span className="text-sm font-mono">AI PROCESS</span>
                </div>
                <div className="hidden sm:block text-teal-400">→</div>
                <div className="flex items-center gap-2 text-teal-400">
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-400"></div>
                  <span className="text-sm font-mono">DOWNLOAD</span>
                </div>
              </div>

              {/* AI Technology Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="flex items-center gap-2 text-teal-400 mb-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono">NEURAL NETWORKS</span>
                  </div>
                  <div className="text-white text-sm">Deep learning models trained on millions of images</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="flex items-center gap-2 text-teal-400 mb-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
                    <span className="text-sm font-mono">EDGE DETECTION</span>
                  </div>
                  <div className="text-white text-sm">Advanced algorithms for perfect cutouts</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="flex items-center gap-2 text-teal-400 mb-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-400"></div>
                    <span className="text-sm font-mono">REAL-TIME</span>
                  </div>
                  <div className="text-white text-sm">Lightning-fast processing with instant results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;