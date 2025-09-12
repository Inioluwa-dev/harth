import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import portraitImage from '../../assets/portrait.jpg';
import portraitTransparent from '../../assets/portrait-transparent.png';

const ShowcaseSection = () => {
  return (
    <div className="bg-black py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="container-custom relative z-10">
        <div 
          className="text-center mb-12 md:mb-16"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
            See the <span className="text-teal-400">Magic</span> in Action
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg">
            Perfect for portraits and professional photography
          </p>
        </div>

        <div 
          className="bg-gradient-to-r from-teal-900/20 to-black/20 rounded-2xl overflow-hidden p-6 md:p-8 backdrop-blur-sm border border-teal-800/30"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Info Section */}
            <div 
              className="md:w-1/4 text-center md:text-left"
              data-aos="fade-right"
              data-aos-delay="300"
            >
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
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-black/70 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium z-10">
                    Original
                  </div>
                  <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl overflow-hidden p-3 md:p-6 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={portraitImage} 
                      alt="Portrait original"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Transparent Background Version */}
                <div className="relative group">
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-teal-400 text-black px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium z-10">
                    No Background
                  </div>
                  <div 
                    className="rounded-xl overflow-hidden p-3 md:p-6 group-hover:scale-105 transition-transform duration-300"
                    style={{
                      backgroundImage: 'url(/src/assets/checkerboard.svg)',
                      backgroundSize: '20px 20px'
                    }}
                  >
                    <img 
                      src={portraitTransparent} 
                      alt="Portrait transparent"
                      className="w-full rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Processing Indicator */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 animate-fade-in-up animation-delay-800">
                <div className="bg-black/80 text-white px-3 py-2 md:px-6 md:py-3 rounded-full text-xs md:text-sm flex items-center gap-2 md:gap-3 backdrop-blur-sm border border-teal-800/30">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal-400 rounded-full animate-pulse"></div>
                  <span className="font-medium">AI: ~2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Try It Now Button */}
        <div className="text-center mt-8 md:mt-12 animate-fade-in-up animation-delay-1000">
          <button className="bg-gradient-to-r from-teal-500 to-teal-400 hover:from-teal-400 hover:to-teal-300 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg inline-flex items-center gap-2 md:gap-3 group transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25">
            <span>Try It Now</span>
            <FontAwesomeIcon 
              icon={faArrowRight} 
              className="transform transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;