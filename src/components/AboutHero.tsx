import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Brain, Award } from 'lucide-react';

const AboutHero = () => {
  const interests = [
    {
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      title: "Cybersecurity",
      description: "Passionate about network security and ethical hacking",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=400&fit=crop"
    },
    {
      icon: <Code className="w-6 h-6 text-blue-400" />,
      title: "Full Stack Development",
      description: "Building scalable web applications with modern technologies",
      image: "https://images.unsplash.com/photo-1555066931-bf19f8fd1085?w=800&h=400&fit=crop"
    },
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: "Machine Learning",
      description: "Exploring AI applications and deep learning models",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
      icon: <Award className="w-6 h-6 text-blue-400" />,
      title: "Competitive Programming",
      description: "Regular participant in coding competitions and hackathons",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm"
      >
        <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
        <p className="text-gray-300 mb-6">
          Computer Science undergraduate at MNNIT Allahabad, specializing in cybersecurity and full stack development. 
          Passionate about solving complex problems through code and creating innovative solutions.
        </p>
        
        <div className="grid grid-cols-1 gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="absolute inset-0">
                <img 
                  src={interest.image} 
                  alt={interest.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gray-900/80 group-hover:bg-gray-900/60 transition-colors" />
              </div>
              <div className="relative p-6">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    {interest.icon}
                  </div>
                  <h4 className="text-white font-medium">{interest.title}</h4>
                </div>
                <p className="text-gray-300 text-sm">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div className="relative h-64 overflow-hidden rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=800&h=600&fit=crop"
            alt="Programming Setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        </div>

        <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
              MNNIT Allahabad, B.Tech Computer Science
            </li>
            <li className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
              CGPA: 8.5/10
            </li>
            <li className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
              Active member of Coding Club
            </li>
            <li className="flex items-center text-gray-300">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
              Published research paper on ML applications
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHero;