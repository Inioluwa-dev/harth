import React, { useState, useEffect, useCallback } from 'react';

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
  const [showProcessedModal, setShowProcessedModal] = useState(false);

  // Memoized close handler to prevent unnecessary re-renders
  const closeProcessedModal = useCallback(() => {
    setShowProcessedModal(false);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showProcessedModal) {
        closeProcessedModal();
      }
    };

    if (showProcessedModal) {
      document.addEventListener('keydown', handleEscape, { passive: true });
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showProcessedModal, closeProcessedModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-2 sm:p-4">
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
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
            </div>
          </div>

          {/* Right Side - Processing Options */}
          <div className="p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Processing Options</h3>
            
            {isProcessing ? (
              <div className="space-y-6 sm:space-y-8 h-full flex flex-col justify-center">
                <div className="text-center">
                  {/* Animated Circle with Scaling */}
                  <div className="relative mb-6 sm:mb-8">
                    <div 
                      className={`bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto animate-spin shadow-2xl transition-all duration-500 ease-in-out ${
                        processingStep % 2 === 0 
                          ? 'w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36' 
                          : 'w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40'
                      }`}
                    >
                      <i className="fas fa-magic text-white text-2xl sm:text-3xl md:text-4xl"></i>
                    </div>
                    
                    {/* Pulsing Ring Effect */}
                    <div 
                      className={`absolute inset-0 bg-teal-500/30 rounded-full mx-auto animate-ping transition-all duration-500 ease-in-out ${
                        processingStep % 2 === 0 
                          ? 'w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36' 
                          : 'w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40'
                      }`}
                    ></div>
                    
                    {/* Outer Ring */}
                    <div 
                      className={`absolute inset-0 border-2 border-teal-400/50 rounded-full mx-auto animate-pulse transition-all duration-500 ease-in-out ${
                        processingStep % 2 === 0 
                          ? 'w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36' 
                          : 'w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40'
                      }`}
                    ></div>
                  </div>
                  
                  {/* Step Title */}
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                    {processingSteps[processingStep]}
                  </h4>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-700 rounded-full h-3 sm:h-4 mb-4 sm:mb-6 shadow-inner">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-teal-600 h-3 sm:h-4 rounded-full transition-all duration-700 ease-out shadow-lg"
                      style={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                    ></div>
                  </div>
                  
                  {/* Step Counter */}
                  <div className="space-y-2 sm:space-y-3">
                    <p className="text-gray-300 text-sm sm:text-base font-medium">
                      Step {processingStep + 1} of {processingSteps.length}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Processing your image...
                    </p>
                  </div>
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
                <div className="relative group">
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
                  
                  {/* Hover overlay with zoom icon */}
                  <div 
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                    onClick={() => setShowProcessedModal(true)}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-200">
                      <i className="fas fa-search-plus text-white text-lg"></i>
                    </div>
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

      {/* Processed Image Zoom Modal */}
      {showProcessedModal && (
        <div 
          className="fixed inset-0 bg-black/95 z-[60] flex items-center justify-center"
          onClick={closeProcessedModal}
        >
          <div 
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: 'url(/assets/checkerboard.svg)',
                backgroundSize: '20px 20px'
              }}
            >
              <img
                src={processedImage}
                alt="Processed Preview"
                className="w-full h-full object-contain"
                loading="eager"
                decoding="async"
              />
            </div>
            
            {/* Close button */}
            <button
              onClick={closeProcessedModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-black/80 transition-colors duration-150 cursor-pointer"
            >
              <i className="fas fa-times text-sm sm:text-lg"></i>
            </button>
            
            {/* Image label */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-black/80 rounded-lg px-3 py-2">
              <p className="text-white text-sm font-medium">Background Removed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProcessingModal;
