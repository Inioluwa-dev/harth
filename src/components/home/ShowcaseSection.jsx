import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AnimatedSection from '../common/AnimatedSection';
// Images are now served from public folder
const portraitImage = '/assets/portrait.jpg';
const portraitTransparent = '/assets/portrait-transparent.png';

const ShowcaseSection = () => {
  return (
    <div className="bg-black py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <AnimatedSection animation="fadeUp" delay={0.1} className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            See the <span className="text-teal-400">Magic</span> in Action
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
            Perfect for portraits and professional photography
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fadeUp" delay={0.2}>
          <div className="bg-gradient-to-r from-teal-900/20 to-black/20 rounded-2xl overflow-hidden p-6 md:p-8 backdrop-blur-sm border border-teal-800/30">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Info Section */}
              <div className="md:w-1/4 text-center md:text-left">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 md:mb-3">
                  Portrait Photography
                </h3>
                <p className="text-gray-400 mb-4 md:mb-6 text-sm md:text-base">
                  Create professional headshots with clean backgrounds
                </p>
                <div className="flex items-center justify-center md:justify-start gap-2 md:gap-4 text-xs md:text-sm">
                  <span className="text-teal-400 font-medium">Original</span>
                  <FontAwesomeIcon icon={faArrowRight} className="text-gray-500" />
                  <span className="text-teal-400 font-medium">Transparent BG</span>
                </div>
              </div>

              {/* Image Comparison Section */}
              <div className="md:w-3/4 relative animate-fade-in-up animation-delay-600">
                <div className="grid grid-cols-2 gap-6">
                  {/* Original Image */}
                  <div className="relative group">
                    <div className="relative overflow-hidden rounded-xl shadow-2xl">
                      <img 
                        src={portraitImage} 
                        alt="Original Portrait" 
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">Before</span>
                      </div>
                    </div>
                  </div>

                  {/* Processed Image */}
                  <div className="relative group">
                    <div 
                      className="relative overflow-hidden rounded-xl shadow-2xl"
                      style={{
                        backgroundImage: 'url(/assets/checkerboard.svg)',
                        backgroundSize: '20px 20px',
                        backgroundRepeat: 'repeat'
                      }}
                    >
                      <img 
                        src={portraitTransparent} 
                        alt="Processed Portrait" 
                        className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">After</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-8 md:mt-12">
              <button className="bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center gap-2 md:gap-3 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25">
                <span>Try It Now</span>
                <FontAwesomeIcon 
                  icon={faArrowRight} 
                  className="transform transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default ShowcaseSection;