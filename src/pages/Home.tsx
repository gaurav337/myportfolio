import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from '../components/ParticleBackground';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <ParticleBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 px-4"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Gaurav Kumar Jangid
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 mb-8 px-4"
          >
            Cybersecurity Expert | Full Stack Developer | ML Enthusiast
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-8"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse blur-xl opacity-50" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
              alt="Gaurav Kumar Jangid"
              className="relative z-10 rounded-full w-full h-full object-cover border-4 border-blue-400 hover:border-purple-500 transition-colors duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 px-4"
          >
            <a
              href="/projects"
              className="w-full sm:w-auto group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium overflow-hidden transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <Github className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/gauravkrjangid"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:gaurav.j.8185@gmail.com"
                className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <Mail className="w-6 h-6 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;