import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      institution: "Motilal Nehru National Institute of Technology",
      degree: "B.Tech in Computer Science",
      duration: "2020 - 2024",
      grade: "CGPA: 8.5/10",
      achievements: [
        "Specialized in Cybersecurity and Machine Learning",
        "Active member of Coding Club",
        "Published research paper on ML applications"
      ]
    },
    {
      institution: "Delhi Public School",
      degree: "Senior Secondary (XII)",
      duration: "2020",
      grade: "91%",
      achievements: ["School topper in Computer Science"]
    }
  ];

  const certifications = [
    {
      name: "Machine Learning Specialization",
      issuer: "DeepLearning.AI, Stanford University",
      date: "Dec 2024",
      credentialId: "23XPQQCZLQXD"
    },
    {
      name: "Introduction to Generative AI",
      issuer: "Google",
      date: "Jan 2025",
      credentialId: "13478868"
    },
    {
      name: "Mastercard - Cybersecurity Job Simulation",
      issuer: "Forage",
      date: "Dec 2024",
      credentialId: "Hc55FqpsmMPvujxCf"
    }
  ];

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
      >
        <div className="flex items-center mb-6">
          <GraduationCap className="w-6 h-6 text-blue-400 mr-3" />
          <h3 className="text-2xl font-semibold text-white">Education</h3>
        </div>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-l-2 border-blue-400 pl-4"
            >
              <h4 className="text-xl font-semibold text-white">{edu.institution}</h4>
              <p className="text-blue-400">{edu.degree}</p>
              <p className="text-gray-400">{edu.duration} | {edu.grade}</p>
              <ul className="mt-2 space-y-1">
                {edu.achievements.map((achievement) => (
                  <li key={achievement} className="text-gray-300 text-sm">
                    • {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm"
      >
        <div className="flex items-center mb-6">
          <Award className="w-6 h-6 text-blue-400 mr-3" />
          <h3 className="text-2xl font-semibold text-white">Certifications</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="border border-gray-700 rounded-lg p-4 hover:border-blue-400 transition-colors"
            >
              <h4 className="text-blue-400 font-semibold">{cert.name}</h4>
              <p className="text-gray-300">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.date}</p>
              <p className="text-gray-500 text-sm">ID: {cert.credentialId}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;