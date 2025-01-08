import React from 'react';
import { motion } from 'framer-motion';
import Education from '../components/Education';
import AboutHero from '../components/AboutHero';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - Gaurav Kumar Jangid</title>
        <meta name="description" content="Learn about Gaurav Kumar Jangid's journey, skills, and expertise in Cybersecurity, Full Stack Development, and Machine Learning." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <AboutHero />
            <Education />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;