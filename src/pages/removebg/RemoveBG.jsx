import React, { useState, useRef } from 'react';

const Harth = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [processedImage, setProcessedImage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showProcessingModal, setShowProcessingModal] = useState(false);
  const [processingStep, setProcessingStep] = useState(0);
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
    
    // Simulate processing steps
    for (let i = 0; i < processingSteps.length; i++) {
      setProcessingStep(i);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Simulate processed result (in real app, this would be the actual processed image)
    setProcessedImage(selectedImage);
    setIsProcessing(false);
  };

  const closeProcessingModal = () => {
    setShowProcessingModal(false);
    setProcessingStep(0);
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
      <div className="container-custom py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Example Images */}
            <div className="space-y-8" data-aos="fade-right">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  See the <span className="text-teal-400">Magic</span>
                </h2>
                <p className="text-lg text-gray-300">
                  Professional background removal in seconds
                </p>
              </div>
              
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-6">
                {/* Before Image */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">Before</h3>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <img
                      src="/src/assets/brain.jpg"
                      alt="Original brain image"
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                </div>
                
                {/* After Image */}
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-white mb-4">After</h3>
                  <div className="bg-white rounded-xl p-4 shadow-lg">
                    <div 
                      className="w-full h-64 rounded-lg"
                      style={{
                        backgroundImage: 'url(/src/assets/checkerboard.svg)',
                        backgroundSize: '20px 20px'
                      }}
                    >
                      <img
                        src="/src/assets/brain-transparent.png"
                        alt="Brain with transparent background"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Upload Card */}
            <div className="flex justify-center" data-aos="fade-left">
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 w-full max-w-md border border-gray-700/50">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Remove Background
                  </h3>
                  <p className="text-gray-300 mb-8">
                    Upload your image and get professional results instantly
                  </p>
                  
                  {!selectedImage ? (
                    <div className="space-y-6">
                      <button
                        onClick={handleFileSelect}
                        className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-4 px-8 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <i className="fas fa-upload text-xl"></i>
                        <span>Upload Image</span>
                      </button>
                      <p className="text-gray-400 text-sm">
                        or drop a file, paste image or URL
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="relative">
                        <img
                          src={selectedImage}
                          alt="Selected"
                          className="w-full h-64 object-cover rounded-xl"
                        />
                        <div className="absolute top-2 right-2">
                          <button
                            onClick={() => setSelectedImage(null)}
                            className="bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
                          >
                            <i className="fas fa-times"></i>
                          </button>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <button
                          onClick={() => {
                            setShowProcessingModal(true);
                            startProcessing();
                          }}
                          className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <i className="fas fa-magic text-xl"></i>
                          <span>Remove Background</span>
                        </button>
                        
                        <button
                          onClick={handleFileSelect}
                          className="w-full bg-gray-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300"
                        >
                          Choose Different Image
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
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
      {showProcessingModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-gray-700">
            <div className="grid md:grid-cols-2 h-full">
              {/* Left Side - Original Image */}
              <div className="p-8 bg-gray-800/50">
                <h3 className="text-2xl font-bold text-white mb-6">Original Image</h3>
                <div className="relative">
                  <img
                    src={selectedImage}
                    alt="Original"
                    className="w-full h-96 object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-black/20 rounded-xl"></div>
                </div>
              </div>

              {/* Right Side - Processing Options */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Processing Options</h3>
                
                {isProcessing ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-spin">
                        <i className="fas fa-magic text-white text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {processingSteps[processingStep]}
                      </h4>
                      <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-to-r from-teal-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${((processingStep + 1) / processingSteps.length) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-gray-400 text-sm">
                        Step {processingStep + 1} of {processingSteps.length}
                      </p>
                    </div>
                  </div>
                ) : processedImage ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i className="fas fa-check text-white text-2xl"></i>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-4">Processing Complete!</h4>
                    </div>
                    
                    {/* Processed Image Preview */}
                    <div className="relative">
                      <div 
                        className="w-full h-64 rounded-xl"
                        style={{
                          backgroundImage: 'url(/src/assets/checkerboard.svg)',
                          backgroundSize: '20px 20px'
                        }}
                      >
                        <img
                          src={processedImage}
                          alt="Processed"
                          className="w-full h-full object-cover rounded-xl"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <button
                        onClick={downloadImage}
                        className="w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <i className="fas fa-download"></i>
                        <span>Download Result</span>
                      </button>
                      
                      <button
                        onClick={() => {
                          setSelectedImage(null);
                          setProcessedImage(null);
                          closeProcessingModal();
                        }}
                        className="w-full bg-gray-700 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-600 transition-all duration-300"
                      >
                        Process Another Image
                      </button>
                    </div>
                  </div>
                ) : null}

                <button
                  onClick={closeProcessingModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Harth;