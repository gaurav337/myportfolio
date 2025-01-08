import React from 'react';
import { motion } from 'framer-motion';
import SkillSection from '../components/SkillSection';

const Skills = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-8">Technical Expertise</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Specialized in cybersecurity, full stack development, and machine learning, with a strong foundation in competitive programming. 
            Passionate about creating secure and scalable solutions while continuously exploring new technologies.
          </p>
          
          <SkillSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;