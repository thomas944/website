'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const FullScreenNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1">
          <div className="w-4 h-0.5 bg-gray-700"></div>
          <div className="w-4 h-0.5 bg-gray-700"></div>
          <div className="w-4 h-0.5 bg-gray-700"></div>
        </div>
        <span className="text-gray-700 font-medium">Menu</span>
      </button>

      {/* Full Screen Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          background: 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-black hover:text-gray-700 transition-colors text-lg font-medium"
          aria-label="Close menu"
        >
          ✕ Close
        </button>

        {/* Brand */}
        <div className="absolute top-6 left-6 text-black font-bold text-2xl">
          MNSH
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-start items-start pl-8 pt-32 h-full">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-black text-4xl md:text-5xl font-light mb-8 hover:underline transition-all duration-200 hover:translate-x-2"
          >
            Home
          </Link>
          <Link
            href="/work"
            onClick={closeMenu}
            className="text-black text-4xl md:text-5xl font-light mb-8 hover:underline transition-all duration-200 hover:translate-x-2"
          >
            Work
          </Link>
          <Link
            href="/blog"
            onClick={closeMenu}
            className="text-black text-4xl md:text-5xl font-light mb-8 hover:underline transition-all duration-200 hover:translate-x-2"
          >
            Blog
          </Link>
          <Link
            href="/now"
            onClick={closeMenu}
            className="text-black text-4xl md:text-5xl font-light mb-8 hover:underline transition-all duration-200 hover:translate-x-2"
          >
            Now
          </Link>
        </nav>
      </div>

      {/* Demo Content */}
      <div className="min-h-screen bg-gray-50 pt-20 px-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Website Content</h1>
        <p className="text-gray-600">
          This is your main website content. Click the menu button to open the full-screen navigation.
        </p>
      </div>
    </>
  );
};

export default FullScreenNavigation;