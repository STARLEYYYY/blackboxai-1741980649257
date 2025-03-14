import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('United Kingdom');

  return (
    <nav className="w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="relative">
            <select 
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="bg-white border border-gray-300 rounded-lg px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary text-sm font-medium"
            >
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ireland">Ireland</option>
              <option value="Scotland">Scotland</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary hover:text-accent transition-colors">
                Mental Health Foundation
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/what-we-do" className="text-gray-700 hover:text-primary transition-colors font-medium">What we do</a>
            <a href="/news-blogs" className="text-gray-700 hover:text-primary transition-colors font-medium">News & Blogs</a>
            <a href="/about-us" className="text-gray-700 hover:text-primary transition-colors font-medium">About us</a>
            <button className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-accent transition-colors font-medium">
              Search
            </button>
            <button className="bg-secondary text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity font-medium">
              Get help
            </button>
            <button className="bg-red-500 text-white px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity font-medium">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-500 hover:text-primary transition-colors p-2"
              aria-label="Toggle menu"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6 pt-2 border-t border-gray-200">
            <div className="space-y-3">
              <a href="/what-we-do" className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium">
                What we do
              </a>
              <a href="/news-blogs" className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium">
                News & Blogs
              </a>
              <a href="/about-us" className="block py-2 text-gray-700 hover:text-primary transition-colors font-medium">
                About us
              </a>
            </div>
            <div className="space-y-3 mt-6">
              <button className="w-full bg-primary text-white px-6 py-3 rounded-full hover:bg-accent transition-colors font-medium">
                Search
              </button>
              <button className="w-full bg-secondary text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium">
                Get help
              </button>
              <button className="w-full bg-red-500 text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity font-medium">
                Donate
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
