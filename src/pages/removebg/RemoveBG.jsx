import React, { useState, useRef, useEffect } from 'react';
import { removeBgApi, addBackgroundApi, extractBackgroundApi } from '../../api/removeBg';
import AddBackgroundCard from './AddBackgroundCard';
import SimpleImageCard from './SimpleImageCard';
import ProcessingModal from './ProcessingModal';
import ExampleShowcase from './ExampleShowcase';

const Harth = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const [processingStartTime, setProcessingStartTime] = useState(null);
  const [processingError, setProcessingError] = useState(null);
  const fileInputRef = useRef(null);
  
  // New state for enhanced functionality
  const [processingMode, setProcessingMode] = useState('remove-bg'); // 'remove-bg', 'add-background', 'extract-background'
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [backgroundFile, setBackgroundFile] = useState(null);
  const [position, setPosition] = useState('center');
  const [scale, setScale] = useState("cover");
  const [showModeSelector, setShowModeSelector] = useState(false);

  const getProcessingSteps = (mode) => {
    switch (mode) {
      case 'remove-bg':
        return [
          "Analyzing image...",
          "Detecting objects...",
          "Identifying background...",
          "Removing background...",
          "Optimizing edges...",
          "Finalizing result..."
        ];
      case 'add-background':
        return [
          "Analyzing original image...",
          "Processing background...",
          "Matching dimensions...",
          "Positioning elements...",
          "Blending images...",
          "Finalizing composite..."
        ];
      case 'extract-background':
        return [
          "Analyzing image...",
          "Detecting background...",
          "Isolating background...",
          "Extracting elements...",
          "Optimizing quality...",
          "Finalizing extraction..."
        ];
      default:
        return [
          "Processing image...",
          "Applying effects...",
          "Finalizing result..."
        ];
    }
  };

  const processingSteps = getProcessingSteps(processingMode);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        // Don't automatically start processing - let user click the button
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleBackgroundUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setBackgroundFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleModeChange = (mode) => {
    setProcessingMode(mode);
    setShowModeSelector(false);
    // Reset all images and state when changing modes
    setProcessedImage(null);
    setBackgroundImage(null);
    setBackgroundFile(null);
    setSelectedImage(null);
    setSelectedFile(null);
    setProcessingError(null);
  };

  const resetAll = () => {
    setSelectedImage(null);
    setProcessedImage(null);
    setSelectedFile(null);
    setBackgroundImage(null);
    setBackgroundFile(null);
    setProcessingError(null);
  };

  // Close mode selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showModeSelector && !event.target.closest('.mode-selector')) {
        setShowModeSelector(false);
      }
    };

    if (showModeSelector) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModeSelector]);

  const startProcessing = async () => {
    setIsProcessing(true);
    setProcessingStep(0);
    setProcessingStartTime(Date.now());
    setProcessingError(null);
    
    try {
      // Get the file from the file input or stored file
      let fileToProcess = selectedFile;
      
      // If no stored file, try to get it from the file input
      if (!fileToProcess && fileInputRef.current?.files?.[0]) {
        fileToProcess = fileInputRef.current.files[0];
        setSelectedFile(fileToProcess);
      }
      
      if (!fileToProcess) {
        throw new Error('No file selected');
      }

      // Validate mode-specific requirements
      if (processingMode === 'add-background' && !backgroundFile) {
        throw new Error('Please select a background image');
      }
      
      // Start API call based on mode
      let apiPromise;
      switch (processingMode) {
        case 'remove-bg':
          apiPromise = removeBgApi(fileToProcess);
          break;
        case 'add-background':
          apiPromise = addBackgroundApi(fileToProcess, backgroundFile, position, scale);
          break;
        case 'extract-background':
          apiPromise = extractBackgroundApi(fileToProcess);
          break;
        default:
          throw new Error('Invalid processing mode');
      }
      
      // Run processing steps animation in the background
      const processingAnimation = async () => {
        let stepIndex = 0;
        const interval = setInterval(() => {
          if (stepIndex < processingSteps.length - 1) {
            stepIndex++;
            setProcessingStep(stepIndex);
          }
        }, 1500); // 1.5s per step for ~9s total (6 steps × 1.5s = 9s) - covers slow API responses
        
        // Clean up interval when API completes
        return new Promise((resolve) => {
          apiPromise.finally(() => {
            clearInterval(interval);
            resolve();
          });
        });
      };
      
      // Start the animation but don't wait for it
      processingAnimation();
      
      // Wait for API response with timeout handling
      let timeoutId;
      
      // Set up timeout
      timeoutId = setTimeout(() => {
        console.error("API call timed out after 60 seconds");
      }, 60000);
      
      try {
        // Wait for API response
        const processedImageUrl = await apiPromise;
        
        // Clear timeout if API call succeeds
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        
        console.log("Processing completed successfully:", processedImageUrl);
        setProcessedImage(processedImageUrl);
      } catch (error) {
        // Clear timeout on error
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        
        // Log more details about the error
        console.error("API call failed:", {
          error: error.message,
          isTimeout: error.message.includes('timeout'),
          processingMode,
          errorStack: error.stack
        });
        
        throw error;
      }
      
    } catch (error) {
      console.error("Processing failed:", error);
      setProcessingError(error.message || 'An error occurred during processing');
    } finally {
      setIsProcessing(false);
      setProcessingStartTime(null);
    }
  };

  const closeProcessingModal = () => {
    setShowProcessingModal(false);
    setProcessingStep(0);
    
    // Clean up blob URL when user closes modal
    if (processedImage && processedImage.startsWith('blob:')) {
      URL.revokeObjectURL(processedImage);
    }
  };

  const downloadImage = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'removed-background.png';
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      <div className="container-custom py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Mode Selector */}
          <div className="flex justify-center mb-8">
            <div className="relative mode-selector">
              <button
                onClick={() => setShowModeSelector(!showModeSelector)}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2"
              >
                <i className="fas fa-cog"></i>
                <span>
                  {processingMode === 'remove-bg' && 'Remove Background'}
                  {processingMode === 'add-background' && 'Add Custom Background'}
                  {processingMode === 'extract-background' && 'Extract Background'}
                </span>
                <i className={`fas fa-chevron-down transition-transform duration-200 ${showModeSelector ? 'rotate-180' : ''}`}></i>
              </button>
              
              {showModeSelector && (
                <div className="absolute z-50 mt-2 left-1/2 transform -translate-x-1/2 w-56 bg-gray-700 rounded-lg shadow-xl border border-gray-600">
                  <div className="py-2">
                    <button
                      onClick={() => handleModeChange('remove-bg')}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-600 transition-colors ${
                        processingMode === 'remove-bg' ? 'text-teal-400 bg-gray-600' : 'text-white'
                      }`}
                    >
                      <i className="fas fa-cut mr-3"></i>
                      Remove Background
                    </button>
                    <button
                      onClick={() => handleModeChange('add-background')}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-600 transition-colors ${
                        processingMode === 'add-background' ? 'text-teal-400 bg-gray-600' : 'text-white'
                      }`}
                    >
                      <i className="fas fa-plus mr-3"></i>
                      Add Custom Background
                    </button>
                    <button
                      onClick={() => handleModeChange('extract-background')}
                      className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-600 transition-colors ${
                        processingMode === 'extract-background' ? 'text-teal-400 bg-gray-600' : 'text-white'
                      }`}
                    >
                      <i className="fas fa-download mr-3"></i>
                      Extract Background
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
            {/* Left Side - Example Images */}
            <ExampleShowcase />

            {/* Right Side - Dynamic Card Based on Mode */}
            {processingMode === 'add-background' ? (
              <AddBackgroundCard
                selectedImage={selectedImage}
                backgroundImage={backgroundImage}
                position={position}
                scale={scale}
                onFileSelect={handleFileSelect}
                onBackgroundUpload={handleBackgroundUpload}
                onPositionChange={setPosition}
                onScaleChange={setScale}
                onRemoveImage={() => {
                  setSelectedImage(null);
                  setSelectedFile(null);
                }}
                onRemoveBackground={() => {
                  setBackgroundImage(null);
                  setBackgroundFile(null);
                }}
                onStartProcessing={() => {
                  setShowProcessingModal(true);
                  startProcessing();
                }}
              />
            ) : (
              <SimpleImageCard
                selectedImage={selectedImage}
                processingMode={processingMode}
                onFileSelect={handleFileSelect}
                onRemoveImage={() => {
                  setSelectedImage(null);
                  setSelectedFile(null);
                }}
                onStartProcessing={() => {
                  setShowProcessingModal(true);
                  startProcessing();
                }}
              />
            )}

          </div>
        </div>

        {/* Hidden File Inputs */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />
        
        <input
          id="background-input"
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleBackgroundUpload}
        />

      </div>

      {/* Processing Modal */}
      <ProcessingModal
        showModal={showProcessingModal}
        onClose={closeProcessingModal}
        selectedImage={selectedImage}
        processedImage={processedImage}
        backgroundImage={backgroundImage}
        processingMode={processingMode}
        isProcessing={isProcessing}
        processingStep={processingStep}
        processingSteps={processingSteps}
        processingError={processingError}
        onDownload={downloadImage}
        onProcessAnother={() => {
          // Clean up current processed image
          if (processedImage && processedImage.startsWith('blob:')) {
            URL.revokeObjectURL(processedImage);
          }
          
          resetAll();
          closeProcessingModal();
        }}
        onRetry={() => {
          setProcessingError(null);
          startProcessing();
        }}
      />
    </div>
  );
};

export default Harth;
