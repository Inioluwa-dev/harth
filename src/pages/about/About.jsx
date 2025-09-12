import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container-custom py-16">
        {/* Meet Mr Heritage Section */}
        <section className="mb-20" data-aos="fade-up">
          <div className="bg-gradient-to-br from-gray-900 via-black to-teal-900 rounded-2xl p-12 text-white border border-teal-500/20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Meet <span className="text-teal-400">Mr Heritage</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  The visionary developer behind Harth. Olayoriju Inioluwa, known as Mr Heritage, 
                  is a dedicated and innovative developer with a passion for creating user-friendly 
                  and efficient web applications.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  "I believe technology should empower creativity, not complicate it. 
                  Harth is my way of making professional image editing accessible 
                  to everyone, everywhere."
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-code text-teal-400 text-xl"></i>
                    <span className="text-gray-300">Full-Stack Developer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-brain text-teal-400 text-xl"></i>
                    <span className="text-gray-300">AI/ML Enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-palette text-teal-400 text-xl"></i>
                    <span className="text-gray-300">UI/UX Designer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="fas fa-globe text-teal-400 text-xl"></i>
                    <span className="text-gray-300">Portfolio: mr-heritage.web.app</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-teal-400/30 shadow-2xl">
                  <img 
                    src="/src/assets/mr_h.png" 
                    alt="Mr Heritage - Olayoriju Inioluwa" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-teal-400 mb-2">Mr Heritage</h3>
                <p className="text-gray-400 mb-2">Olayoriju Inioluwa</p>
                <p className="text-gray-400">Founder & Lead Developer</p>
                <div className="flex justify-center space-x-4 mt-6">
                  <a href="https://github.com/Inioluwa-dev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <i className="fab fa-github text-2xl"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/olayoriju-inioluwa-116399383/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <i className="fab fa-linkedin text-2xl"></i>
                  </a>
                  <a href="https://x.com/Inioluwa_dev" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <i className="fab fa-x-twitter text-2xl"></i>
                  </a>
                  <a href="https://www.instagram.com/inioluwa_dev/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <i className="fab fa-instagram text-2xl"></i>
                  </a>
                  <a href="https://mr-heritage.web.app" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    <i className="fas fa-globe text-2xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="mb-20" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Harth was born from a simple yet powerful vision: to democratize professional-grade 
                image editing. We believe that everyone deserves access to high-quality background 
                removal tools, regardless of their technical expertise or budget.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our AI-powered platform combines state-of-the-art machine learning algorithms with 
                an intuitive user experience, making complex image processing as simple as a few clicks.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center">
                  <i className="fas fa-brain text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-white">AI-Powered</h3>
                  <p className="text-gray-300">Advanced machine learning algorithms</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-500/20 to-teal-600/30 rounded-2xl p-8 border border-teal-500/20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">1M+</div>
                  <div className="text-gray-300">Images Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">2-5s</div>
                  <div className="text-gray-300">Processing Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">24/7</div>
                  <div className="text-gray-300">Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-20" data-aos="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Cutting-Edge Technology
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Powered by advanced AI and machine learning algorithms that deliver 
              professional results in seconds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700/50" data-aos="zoom-in" data-aos-delay="100">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-robot text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Deep Learning AI</h3>
              <p className="text-gray-300">
                Our neural networks are trained on millions of images to achieve 
                pixel-perfect background detection and removal.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700/50" data-aos="zoom-in" data-aos-delay="200">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-bolt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Lightning Fast</h3>
              <p className="text-gray-300">
                Optimized algorithms process your images in 2-5 seconds, 
                delivering results faster than traditional methods.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-700/50" data-aos="zoom-in" data-aos-delay="300">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-shield-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Privacy First</h3>
              <p className="text-gray-300">
                Your images are processed securely and automatically deleted 
                after processing to protect your privacy.
              </p>
            </div>
          </div>
        </section>


        {/* Mission & Vision */}
        <section className="mb-20" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-bullseye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 text-lg">
                To democratize professional image editing by providing accessible, 
                AI-powered tools that deliver studio-quality results to everyone, 
                regardless of their technical expertise or budget.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700/50">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <i className="fas fa-eye text-white text-2xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To become the world's leading platform for AI-powered image processing, 
                empowering millions of creators, designers, and businesses to achieve 
                their creative goals effortlessly.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center" data-aos="fade-up">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-12 text-white border border-teal-400/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Images?
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join thousands of users who trust Harth for their image editing needs. 
              Experience the power of AI-driven background removal today.
            </p>
            <a 
              href="/remove-bg" 
              className="inline-flex items-center space-x-2 bg-white text-teal-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              <i className="fas fa-wand-magic-sparkles"></i>
              <span>Try Harth Now</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;