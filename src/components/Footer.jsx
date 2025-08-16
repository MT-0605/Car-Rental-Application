import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                DriveNow
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Drive in style with our premium car rental service. Experience
              luxury, comfort, and reliability with every journey.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <FaTwitter className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <FaInstagram className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-700 hover:bg-purple-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/home"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/cars"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Browse Cars
                </Link>
              </li>
              <li>
                <Link
                  to="/list-car"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  List Your Car
                </Link>
              </li>
              <li>
                <Link
                  to="/my-bookings"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  My Bookings
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center"
                >
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <FaPhone className="w-4 h-4 mr-3 text-purple-400" />
                <span>+91 99041137201</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FaEnvelope className="w-4 h-4 mr-3 text-purple-400" />
                <span>drivenowinfo@gmail.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <FaMapMarkerAlt className="w-4 h-4 mr-3 mt-1 text-purple-400" />
                <span>DriveNow, Nikol, Ahmedabad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} DriveNow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
