import React from 'react';

const UploadCard = ({ 
  selectedImage, 
  onFileSelect, 
  onRemoveImage, 
  onStartProcessing 
}) => {
  return (
    <div className="flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-left">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md border border-gray-700/50 shadow-2xl">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            Remove Background
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            Upload your image and get professional results instantly
          </p>
          
          {!selectedImage ? (
            <div className="space-y-4 sm:space-y-6">
              <button
                onClick={onFileSelect}
                className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm sm:text-base"
              >
                <i className="fas fa-upload text-lg sm:text-xl"></i>
                <span>Upload Image</span>
              </button>
              <p className="text-gray-400 text-xs sm:text-sm">
                or drop a file, paste image or URL
              </p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Selected"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-2 right-2">
                  <button
                    onClick={onRemoveImage}
                    className="bg-black/60 text-white rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-black/80 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <i className="fas fa-times text-xs sm:text-sm"></i>
                  </button>
                </div>
              </div>
              
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={onStartProcessing}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm sm:text-base"
                >
                  <i className="fas fa-magic text-lg sm:text-xl"></i>
                  <span>Remove Background</span>
                </button>
                
                <button
                  onClick={onFileSelect}
                  className="w-full bg-gray-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                >
                  Choose Different Image
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UploadCard;
