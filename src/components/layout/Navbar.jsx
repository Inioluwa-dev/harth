import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars, 
  faXmark, 
  faImage
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-teal-900">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo - Hidden on mobile when menu is open */}
          <Link to="/" className={`flex items-center space-x-2 text-xl font-bold text-white ${isOpen ? 'md:flex hidden' : 'flex'}`}>
            <FontAwesomeIcon icon={faImage} className="text-2xl" />
            <span>Harth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-white/90 hover:text-white transition-colors">Home</Link>
            <Link to="/remove-bg" className="text-white/90 hover:text-white transition-colors">Remove BG</Link>
            <Link to="/about" className="text-white/90 hover:text-white transition-colors">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-lg text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon 
              icon={isOpen ? faXmark : faBars} 
              className={`transform transition-all duration-500 ${isOpen ? 'rotate-180' : ''}`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`
            fixed inset-0 md:hidden
            bg-teal-900
            transition-all duration-500 ease-out
            flex flex-col
            ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}
          style={{
            clipPath: isOpen 
              ? 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' 
              : 'polygon(0 0, 100% 0, 100% 0, 50% 0, 0 0)',
            transition: 'clip-path 600ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease-out',
            height: '60vh'
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faImage} className="text-white text-xl" />
              <span className="text-white font-semibold text-lg">Harth</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-lg text-white focus:outline-none"
              aria-label="Close menu"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col justify-center px-6 py-3">
            <div className="space-y-8">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-white hover:text-teal-300 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/remove-bg" 
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-white hover:text-teal-300 transition-colors"
              >
                Remove BG
              </Link>
              <Link 
                to="/about" 
                onClick={() => setIsOpen(false)}
                className="block text-lg font-bold text-white hover:text-teal-300 transition-colors"
              >
                About
              </Link>
            </div>

            {/* Action Button */}
            <div className="mt-16">
              <button 
                onClick={() => setIsOpen(false)}
                className="w-full bg-white text-teal-900 py-4 px-6 
                         font-bold text-lg
                         transform transition-all duration-300 
                         hover:bg-teal-50 active:scale-[0.98]
                         shadow-lg shadow-black/10
                         rounded-full"
              >
                Try It Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;