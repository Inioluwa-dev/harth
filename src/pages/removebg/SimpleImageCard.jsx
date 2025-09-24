import React, { useState, useEffect } from 'react';

const SimpleImageCard = ({ 
  selectedImage,
  processingMode,
  onFileSelect, 
  onRemoveImage,
  onStartProcessing 
}) => {
  const [showImageModal, setShowImageModal] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);

  // Reset state when image changes
  useEffect(() => {
    setIsDragOver(false);
  }, [selectedImage]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && showImageModal) {
        setShowImageModal(false);
      }
    };

    if (showImageModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showImageModal]);

  // Handle drag and drop events
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      
      // Validate file type
      if (file.type.startsWith('image/')) {
        // Create a synthetic event to match the file input handler
        const syntheticEvent = {
          target: {
            files: [file]
          }
        };
        onFileSelect(syntheticEvent);
      } else {
        // Show error for non-image files
        alert('Please drop an image file (JPG, PNG, GIF, etc.)');
      }
    }
  };

  const getModeTitle = () => {
    switch (processingMode) {
      case 'remove-bg':
        return 'Remove Background';
      case 'extract-background':
        return 'Extract Background';
      default:
        return 'Image Processing';
    }
  };

  const getModeDescription = () => {
    switch (processingMode) {
      case 'remove-bg':
        return 'Remove the background from your image with AI precision';
      case 'extract-background':
        return 'Extract only the background from your image';
      default:
        return 'Process your image with advanced AI';
    }
  };

  const getButtonText = () => {
    switch (processingMode) {
      case 'remove-bg':
        return 'Remove Background';
      case 'extract-background':
        return 'Extract Background';
      default:
        return 'Process Image';
    }
  };

  return (
    <div className="flex justify-center lg:justify-end order-1 lg:order-2">
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 w-full max-w-sm sm:max-w-md border border-gray-700/50 shadow-2xl">
        <div className="text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
            {getModeTitle()}
          </h3>
          <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            {getModeDescription()}
          </p>
          
          {!selectedImage ? (
            <div 
              className={`space-y-4 sm:space-y-6 p-4 sm:p-6 rounded-xl border-2 border-dashed transition-all duration-300 ${
                isDragOver 
                  ? 'border-teal-400 bg-teal-500/10 scale-105' 
                  : 'border-gray-600 hover:border-gray-500'
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDragOver 
                    ? 'bg-teal-500/20 scale-110' 
                    : 'bg-gray-700/50'
                }`}>
                  <i className={`fas fa-cloud-upload-alt text-2xl sm:text-3xl transition-colors duration-300 ${
                    isDragOver ? 'text-teal-400' : 'text-gray-400'
                  }`}></i>
                </div>
                
                <h4 className={`text-lg sm:text-xl font-semibold mb-2 transition-colors duration-300 ${
                  isDragOver ? 'text-teal-400' : 'text-white'
                }`}>
                  {isDragOver ? 'Drop your image here' : 'Upload Image'}
                </h4>
                
                <p className={`text-sm transition-colors duration-300 ${
                  isDragOver ? 'text-teal-300' : 'text-gray-400'
                }`}>
                  {isDragOver ? 'Release to upload' : 'Drag & drop or click to browse'}
                </p>
              </div>
              
              <button
                onClick={onFileSelect}
                className={`w-full py-3 sm:py-4 px-6 sm:px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm sm:text-base ${
                  isDragOver
                    ? 'bg-teal-500 text-white hover:bg-teal-600'
                    : 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700'
                }`}
              >
                <i className="fas fa-upload text-lg sm:text-xl"></i>
                <span>Choose File</span>
              </button>
              
              <p className="text-gray-400 text-xs sm:text-sm">
                Supports JPG, PNG, GIF, WebP
              </p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {/* Image Preview Section */}
              <div className="space-y-3">
                <div 
                  className={`relative group rounded-xl transition-all duration-300 ${
                    isDragOver ? 'ring-2 ring-teal-400 ring-opacity-50' : ''
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Drag overlay */}
                  {isDragOver && (
                    <div className="absolute inset-0 bg-teal-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <i className="fas fa-cloud-upload-alt text-4xl text-teal-400 mb-2"></i>
                        <p className="text-teal-400 font-semibold">Drop to replace image</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute top-2 right-2">
                    <button
                      onClick={onRemoveImage}
                      className="bg-black/60 text-white rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center hover:bg-black/80 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      <i className="fas fa-times text-xs sm:text-sm"></i>
                    </button>
                  </div>
                  
                  {/* Hover overlay with zoom icon */}
                  <div 
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer"
                    onClick={() => setShowImageModal(true)}
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-200">
                      <i className="fas fa-search-plus text-white text-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="space-y-2 sm:space-y-3">
                <button
                  onClick={onStartProcessing}
                  className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer text-sm sm:text-base shadow-lg hover:shadow-xl"
                >
                  <i className="fas fa-magic text-lg sm:text-xl"></i>
                  <span>{getButtonText()}</span>
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

      {/* Image Preview Modal */}
      {showImageModal && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setShowImageModal(false)}
        >
          <div 
            className="relative w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Preview"
              className="w-full h-full object-contain"
              loading="eager"
              decoding="async"
            />
            
            {/* Close button */}
            <button
              onClick={() => setShowImageModal(false)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/60 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-black/80 transition-colors duration-150 cursor-pointer"
            >
              <i className="fas fa-times text-sm sm:text-lg"></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleImageCard;
