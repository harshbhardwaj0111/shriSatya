import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../images/contant3.png';

const NavbarMain = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Shri Satya Technology" className="w-10 h-10" />
          <div className="text-2xl font-bold">
            <Link to="/">Shri Satya Technology</Link>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400 transition">Home</Link>
          <Link to="/About" className="hover:text-gray-400 transition">About Us</Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center hover:text-gray-400 transition"
            >
              Services
              <FaAngleDown className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-gray-800 text-white mt-2 rounded shadow-lg w-48">
                <Link to="/service1" className="block px-4 py-2 hover:bg-gray-700">Service 1</Link>
                <Link to="/service2" className="block px-4 py-2 hover:bg-gray-700">Service 2</Link>
                <Link to="/service3" className="block px-4 py-2 hover:bg-gray-700">Service 3</Link>
              </div>
            )}
          </div>
          <Link to="/career" className="hover:text-gray-400 transition">Career</Link>
          <Link to="/contact" className="hover:text-gray-400 transition">Contact Us</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-2xl focus:outline-none"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-14 right-0 bg-gray-900 text-white shadow-lg rounded w-full">
            <Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
            <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">About Us</Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-700"
              >
                Services
                <FaAngleDown className="ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="bg-gray-800 text-white mt-2 rounded shadow-lg">
                  <Link to="/service1" className="block px-4 py-2 hover:bg-gray-700">Service 1</Link>
                  <Link to="/service2" className="block px-4 py-2 hover:bg-gray-700">Service 2</Link>
                  <Link to="/service3" className="block px-4 py-2 hover:bg-gray-700">Service 3</Link>
                </div>
              )}
            </div>
            <Link to="/career" className="block px-4 py-2 hover:bg-gray-700">Career</Link>
            <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavbarMain;
