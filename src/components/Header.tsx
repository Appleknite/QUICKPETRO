import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-white shadow-sm z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <nav className="flex justify-end space-x-6">
            <a href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="/contact" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-[#8B4513] font-bold text-2xl tracking-wider">
            QUICKPETRO
          </a>

          <div className="hidden md:flex items-center space-x-6">
            {/* Main Menu */}
            <nav className="flex items-center space-x-6">
              <a href="/solutions" className="text-gray-700 hover:text-gray-900 transition-colors">
                Solutions
              </a>
              <a href="/oil-filter-system" className="text-gray-700 hover:text-gray-900 transition-colors">
                Oil Filter System
              </a>
              <a href="/how-we-do-it" className="text-gray-700 hover:text-gray-900 transition-colors">
                How we do it
              </a>
            </nav>

            {/* CTA Button */}
            <button className="bg-[#FF4500] text-white px-6 py-2 rounded-md hover:bg-[#FF5722] transition-colors duration-200 flex items-center space-x-2 transform hover:scale-105">
              <Phone size={18} />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-gray-900">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;