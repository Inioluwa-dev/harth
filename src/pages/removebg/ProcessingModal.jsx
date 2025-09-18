import React from 'react';

const ProcessingModal = ({ 
  showModal, 
  onClose, 
  selectedImage, 
  processedImage, 
  isProcessing, 
  processingStep, 
  processingSteps, 
  processingError,
  onDownload, 
  onProcessAnother,
  onRetry
}) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-hidden border border-gray-700">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          {/* Left Side - Original Image */}
          <div className="p-4 sm:p-8 bg-gray-800/50">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Original Image</h3>
            <div className="relative">
              <img
                src={selectedImage}
                alt="Original"
                className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-xl"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
            </div>
          </div>

          {/* Right Side - Processing Options */}
          <div className="p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Processing Options</h3>
            
            {isProcessing ? (
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-spin">
                    <i className="fas fa-magic text-white text-lg sm:text-2xl"></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    {processingSteps[processingStep]}
                  </h4>
                  <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    Step {processingStep + 1} of {processingSteps.length}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">
                    Processing your image...
                  </p>
                </div>
              </div>
            ) : processingError ? (
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i className="fas fa-exclamation-triangle text-white text-lg sm:text-2xl"></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-2">
                    Processing Failed
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    {processingError}
                  </p>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <button
                    onClick={onRetry}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm sm:text-base"
                  >
                    <i className="fas fa-redo"></i>
                    <span>Try Again</span>
                  </button>
                  
                  <button
                    onClick={onProcessAnother}
                    className="w-full bg-gray-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                  >
                    Choose Different Image
                  </button>
                </div>
              </div>
            ) : processedImage ? (
              <div className="space-y-4 sm:space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i className="fas fa-check text-white text-lg sm:text-2xl"></i>
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-white mb-3 sm:mb-4">Processing Complete!</h4>
                </div>
                
                {/* Processed Image Preview */}
                <div className="relative">
                  <div 
                    className="w-full h-48 sm:h-64 rounded-xl"
                    style={{
                      backgroundImage: 'url(/assets/checkerboard.svg)',
                      backgroundSize: '20px 20px'
                    }}
                  >
                    <img
                      src={processedImage}
                      alt="Processed"
                      className="w-full h-full object-cover rounded-xl"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Image failed to load
                      }}
                      onLoad={() => {
                        // Image loaded successfully
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <button
                    onClick={onDownload}
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm sm:text-base"
                  >
                    <i className="fas fa-download"></i>
                    <span>Download Result</span>
                  </button>
                  
                  <button
                    onClick={onProcessAnother}
                    className="w-full bg-gray-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                  >
                    Process Another Image
                  </button>
                </div>
              </div>
            ) : null}

            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-400 hover:text-white transition-colors cursor-pointer p-2"
            >
              <i className="fas fa-times text-lg sm:text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingModal;
