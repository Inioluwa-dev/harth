import React, { useState, useRef } from 'react';
import { removeBgApi } from '../../api/removeBg';
import UploadCard from './UploadCard';
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

  const processingSteps = [
    "Analyzing image...",
    "Detecting objects...",
    "Identifying background...",
    "Removing background...",
    "Optimizing edges...",
    "Finalizing result..."
  ];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setShowProcessingModal(true);
        startProcessing();
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

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
      
      // Start API call immediately
      const apiPromise = removeBgApi(fileToProcess);
      
      // Run processing steps animation in the background
      // This provides visual feedback but doesn't block the API response
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
      
      // Add timeout for API call (30 seconds)
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
          reject(new Error('Request timeout - please check your connection and try again'));
        }, 30000); // 30 seconds timeout
      });
      
      // Wait for API response with timeout
      const processedImageUrl = await Promise.race([apiPromise, timeoutPromise]);
      setProcessedImage(processedImageUrl);
      
    } catch (error) {
      setProcessingError(error.message);
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-start lg:items-center">
            {/* Left Side - Example Images */}
            <ExampleShowcase />

            {/* Right Side - Upload Card */}
            <UploadCard
              selectedImage={selectedImage}
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

          </div>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleImageUpload}
        />

      </div>

      {/* Processing Modal */}
      <ProcessingModal
        showModal={showProcessingModal}
        onClose={closeProcessingModal}
        selectedImage={selectedImage}
        processedImage={processedImage}
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
          
          setSelectedImage(null);
          setProcessedImage(null);
          setSelectedFile(null);
          setProcessingError(null);
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
