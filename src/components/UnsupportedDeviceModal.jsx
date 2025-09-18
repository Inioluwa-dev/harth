import React from 'react';

const UnsupportedDeviceModal = () => {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full mx-2 sm:mx-4 max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-br from-teal-900 via-black to-teal-800 text-white p-3 sm:p-4 text-center flex-shrink-0">
          <h2 className="text-lg sm:text-xl text-teal-500 font-bold mb-1">
            Harth
          </h2>
          <p className="text-xs sm:text-sm text-teal-400">
            Free BG Remover Software
          </p>
        </div>

        {/* Content - Scrollable */}
        <div className="p-4 sm:p-6 flex-1 overflow-y-auto">
          {/* Message */}
          <div className="text-gray-600 mb-4 sm:mb-6 space-y-2 sm:space-y-3">
            <p className="text-base sm:text-lg font-medium">
              Your iOS device is not supported.
            </p>
            <p className="text-sm sm:text-base">
              We require iPhone X or newer (Face ID devices) or modern iPads (iOS 13+) for optimal performance.
            </p>
            <p className="text-sm sm:text-base font-medium text-gray-700">
              To enjoy the best experience with Harth, please:
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 sm:p-4 hover:bg-blue-100 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="text-2xl sm:text-3xl">📱</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-blue-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    Upgrade Your iOS Device
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-700 leading-relaxed">
                    Get an iPhone X or newer, or a modern iPad (iOS 13+) for the best experience
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4 hover:bg-green-100 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="text-2xl sm:text-3xl">🤖</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-green-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    Use Android
                  </h3>
                  <p className="text-xs sm:text-sm text-green-700 leading-relaxed">
                    Our app works great on modern Android devices
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 sm:p-4 hover:bg-purple-100 transition-colors">
              <div className="flex items-start space-x-3">
                <div className="text-2xl sm:text-3xl">💻</div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-purple-900 mb-1 sm:mb-2 text-sm sm:text-base">
                    Use Desktop/Laptop
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-700 leading-relaxed">
                    Access the full experience on your computer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-4 sm:mt-6 bg-gray-50 rounded-xl p-3 sm:p-4">
            <div className="flex items-start space-x-2">
              <div className="text-blue-500 text-sm sm:text-base">ℹ️</div>
              <div className="flex-1">
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <strong>Why this restriction?</strong> Older devices may not support modern web features and could cause performance issues or crashes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 pt-0 border-t border-gray-200 flex-shrink-0">
          <p className="text-xs sm:text-sm text-gray-500 text-center leading-relaxed">
            This restriction ensures optimal performance and user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnsupportedDeviceModal;
