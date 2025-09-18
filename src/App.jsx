import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/layout/LoadingScreen';
import UnsupportedDeviceModal from './components/UnsupportedDeviceModal';
import Home from './pages/home/Home';
import RemoveBG from './pages/removebg/RemoveBG';
import About from './pages/about/About';
import { detectUnsupportedDevice } from './utils/deviceDetection';

// Component to handle scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isUnsupportedDevice, setIsUnsupportedDevice] = useState(false);

  useEffect(() => {
    // Check if device is unsupported
    const checkDevice = () => {
      const unsupported = detectUnsupportedDevice();
      setIsUnsupportedDevice(unsupported);
    };

    // Check device immediately
    checkDevice();

    // Simulate realistic loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show unsupported device modal if device is not supported
  if (isUnsupportedDevice) {
    return <UnsupportedDeviceModal />;
  }

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <div className="app">
        <ScrollToTop />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/remove-bg" element={<RemoveBG />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
