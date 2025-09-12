import React from 'react';

const useCases = [
  {
    icon: "fa-solid fa-store",
    title: "E-commerce",
    description: "Create professional product photos with clean backgrounds for your online store",
    examples: ["Product listings", "Marketing materials", "Social media posts"]
  },
  {
    icon: "fa-solid fa-camera",
    title: "Photography",
    description: "Perfect for portrait photography and professional photo editing",
    examples: ["Portrait editing", "Wedding photos", "Fashion shoots"]
  },
  {
    icon: "fa-solid fa-paintbrush",
    title: "Graphic Design",
    description: "Extract elements for designs and create compelling visuals",
    examples: ["Marketing materials", "Social media", "Web design"]
  },
  {
    icon: "fa-solid fa-graduation-cap",
    title: "Education",
    description: "Create engaging educational content and presentations",
    examples: ["Teaching materials", "Student projects", "Educational content"]
  },
  {
    icon: "fa-solid fa-building",
    title: "Real Estate",
    description: "Enhance property photos and create professional listings",
    examples: ["Property listings", "Virtual staging", "Marketing materials"]
  },
  {
    icon: "fa-solid fa-id-card",
    title: "ID Photos",
    description: "Create professional ID photos with correct specifications",
    examples: ["Passport photos", "ID cards", "Professional badges"]
  }
];

const UseCasesSection = () => {

  return (
    <div className="bg-gradient-to-b from-teal-900 via-slate-900 to-black py-20 relative overflow-hidden">
      {/* AI Data Flow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating AI nodes */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-600/5 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        
        {/* Neural network connections */}
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
            Use Cases
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Perfect for Every <span className="text-teal-400">Need</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Discover how our AI-powered background removal tool can help in various professional fields
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              {/* AI Processing Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 blur-lg"></div>
              
              {/* Card content */}
              <div className="relative bg-black/50 backdrop-blur-md rounded-xl p-8 border border-teal-800/40 hover:border-teal-500/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/20 group-hover:bg-black/60">
                {/* AI Grid Overlay */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300">
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
                  <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-700 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                    {/* Circuit pattern */}
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                      <div className="absolute top-2 left-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute top-2 right-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute bottom-2 right-2 w-1 h-1 bg-teal-300 rounded-full"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-teal-200 rounded-full"></div>
                    </div>
                    <i className={`${useCase.icon} text-2xl text-teal-400 group-hover:text-teal-200 transition-colors relative z-10`}></i>
                  </div>
                  {/* Data flow indicators */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-teal-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-teal-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse animation-delay-200"></div>
                  <div className="absolute -top-1 -left-2 w-1 h-1 bg-teal-300 rounded-full opacity-0 group-hover:opacity-100 animate-pulse animation-delay-400"></div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-teal-300 transition-colors">
                  {useCase.title}
                </h3>

                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed mb-6">
                  {useCase.description}
                </p>

                {/* Examples with AI styling */}
                <div className="space-y-2">
                  {useCase.examples.map((example, i) => (
                    <div 
                      key={i}
                      className="bg-teal-900/30 text-teal-300 text-sm py-2 px-4 rounded-full inline-block mr-2 mb-2 group-hover:bg-teal-800/40 group-hover:text-teal-200 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {example}
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* AI Industry Stats */}
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
                <span className="text-green-400 text-sm font-mono">AI INDUSTRY INTEGRATION ACTIVE</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                Trusted Across <span className="text-teal-400">6+ Industries</span>
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Our AI technology is being used by professionals worldwide
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="text-2xl font-bold text-teal-400 mb-1">500K+</div>
                  <div className="text-gray-400 text-sm">E-commerce Users</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="text-2xl font-bold text-teal-400 mb-1">200K+</div>
                  <div className="text-gray-400 text-sm">Photographers</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="text-2xl font-bold text-teal-400 mb-1">150K+</div>
                  <div className="text-gray-400 text-sm">Designers</div>
                </div>
                <div className="bg-black/30 rounded-lg p-4 border border-teal-800/30">
                  <div className="text-2xl font-bold text-teal-400 mb-1">100K+</div>
                  <div className="text-gray-400 text-sm">Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCasesSection;
