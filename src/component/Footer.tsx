import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full mt-10">
      <div className="mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="font-semibold">📍 Bhopal, Madhya Pradesh</p>
          <p className="mt-1">📞 +91 98765 43210</p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <img 
            src="/logo.png" 
            alt="NGO Logo" 
            className="h-12 w-auto mx-auto mb-1"
          />
          <h2 className="text-lg font-bold">The Helping Human Foundation</h2>
        </div>

        {/* Right Section */}
        <div className="flex gap-4 text-2xl text-gray-700">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-green-500 transition" />
          </a>
          <a href="mailto:helpinghuman@email.com">
            <FaEnvelope className="hover:text-blue-500 transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
