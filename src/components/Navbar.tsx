import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
            Gaurav Kumar Jangid
          </Link>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm ${isActive('/') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-sm ${isActive('/about') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className={`text-sm ${isActive('/skills') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className={`text-sm ${isActive('/projects') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm ${isActive('/contact') ? 'text-blue-400' : 'text-gray-300'} hover:text-blue-400 transition-colors`}
            >
              Contact
            </Link>
          </div>

          {/* Desktop Social Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gauravkrjangid" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gaurav.j.8185@gmail.com" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMenuOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
          className={`lg:hidden overflow-hidden ${isMenuOpen ? 'border-t border-gray-700' : ''}`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-blue-400 bg-gray-800' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-blue-400 bg-gray-800' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/skills" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/skills') ? 'text-blue-400 bg-gray-800' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              to="/projects" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/projects') ? 'text-blue-400 bg-gray-800' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-blue-400 bg-gray-800' : 'text-gray-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="px-5 py-3 border-t border-gray-700 flex justify-center space-x-6">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/gauravkrjangid" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
              <Linkedin size={20} />
            </a>
            <a href="mailto:gaurav.j.8185@gmail.com" className="text-gray-300 hover:text-blue-400">
              <Mail size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;