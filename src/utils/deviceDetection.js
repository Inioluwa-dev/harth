// Device detection utility for iOS compatibility
export const detectUnsupportedDevice = () => {
  // Check if it's iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  if (!isIOS) {
    return false; // Not iOS, so it's supported
  }

  // Get screen dimensions
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  
  // iPhone X and above (Face ID devices) - SUPPORTED
  // iPhone X: 375x812, iPhone XS: 375x812, iPhone XR: 414x896, iPhone XS Max: 414x896
  // iPhone 11: 414x896, iPhone 11 Pro: 375x812, iPhone 11 Pro Max: 414x896
  // iPhone 12 mini: 375x812, iPhone 12: 390x844, iPhone 12 Pro: 390x844, iPhone 12 Pro Max: 428x926
  // iPhone 13 mini: 375x812, iPhone 13: 390x844, iPhone 13 Pro: 390x844, iPhone 13 Pro Max: 428x926
  // iPhone 14: 390x844, iPhone 14 Plus: 428x926, iPhone 14 Pro: 393x852, iPhone 14 Pro Max: 430x932
  // iPhone 15: 393x852, iPhone 15 Plus: 430x932, iPhone 15 Pro: 393x852, iPhone 15 Pro Max: 430x932
  
  const isIPhoneXOrAbove = (
    // iPhone X, XS, 11 Pro, 12 mini, 13 mini
    (screenWidth === 375 && screenHeight === 812) ||
    // iPhone XR, 11, 11 Pro Max, 12, 12 Pro, 13, 13 Pro
    (screenWidth === 414 && screenHeight === 896) ||
    // iPhone 12 Pro Max, 13 Pro Max
    (screenWidth === 428 && screenHeight === 926) ||
    // iPhone 12, 12 Pro, 13, 13 Pro, 14, 14 Plus
    (screenWidth === 390 && screenHeight === 844) ||
    // iPhone 14 Pro, 15, 15 Pro
    (screenWidth === 393 && screenHeight === 852) ||
    // iPhone 14 Pro Max, 15 Plus, 15 Pro Max
    (screenWidth === 430 && screenHeight === 932) ||
    // iPhone 14 Plus
    (screenWidth === 428 && screenHeight === 926)
  );

  // iPhone 8 and below (Touch ID devices) - UNSUPPORTED
  // iPhone 8: 375x667, iPhone 8 Plus: 414x736
  // iPhone 7: 375x667, iPhone 7 Plus: 414x736
  // iPhone 6s: 375x667, iPhone 6s Plus: 414x736
  // iPhone 6: 375x667, iPhone 6 Plus: 414x736
  // iPhone SE (1st gen): 320x568
  // iPhone 5s: 320x568, iPhone 5c: 320x568, iPhone 5: 320x568
  
  const isIPhone8OrBelow = (
    // iPhone 8, 7, 6s, 6
    (screenWidth === 375 && screenHeight === 667) ||
    // iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus
    (screenWidth === 414 && screenHeight === 736) ||
    // iPhone SE (1st gen), 5s, 5c, 5
    (screenWidth === 320 && screenHeight === 568)
  );

  // iPad - Check for older versions
  const isIPad = /iPad/.test(navigator.userAgent);
  
  if (isIPad) {
    // Get iOS version for iPad
    const match = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
    if (match) {
      const majorVersion = parseInt(match[1], 10);
      const minorVersion = parseInt(match[2], 10);
      
      // Block iPad with iOS 12 and below
      if (majorVersion < 13) {
        return true; // Unsupported - too old iOS
      }
    }
    
    // Check for very old iPad models by screen size
    // iPad 1, 2, 3, 4: 768x1024
    // iPad Air 1: 768x1024
    // iPad mini 1, 2, 3: 768x1024
    const isOldIPad = (
      (screenWidth === 768 && screenHeight === 1024) ||
      (screenWidth === 1024 && screenHeight === 768)
    );
    
    if (isOldIPad) {
      return true; // Unsupported - old iPad model
    }
    
    return false; // Supported - modern iPad
  }

  // If it's iPhone X or above, it's supported
  if (isIPhoneXOrAbove) {
    return false; // Supported
  }

  // If it's iPhone 8 or below, it's unsupported
  if (isIPhone8OrBelow) {
    return true; // Unsupported
  }

  // For any other iOS device, check screen size as fallback
  // If screen height is less than 800px, likely old device
  if (screenHeight < 800) {
    return true; // Unsupported
  }

  return false; // Supported by default
};

// Check if device has performance issues
export const hasPerformanceIssues = () => {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  if (!isIOS) {
    return false;
  }

  // Check for very small screens or old devices
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  
  // iPhone SE, iPhone 5s, etc.
  if (screenWidth <= 320) {
    return true;
  }

  // iPhone 6s and below
  if (screenWidth <= 375 && screenHeight <= 667) {
    return true;
  }

  return false;
};
