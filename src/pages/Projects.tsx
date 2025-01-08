import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "SecureNet - Network Security Tool",
      description: "Advanced network security monitoring and threat detection system with real-time alerts and vulnerability assessment.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "Wireshark", "Django"],
      type: "security" as const,
      features: [
        "Real-time threat detection",
        "ML-based anomaly detection",
        "Automated vulnerability scanning",
        "Incident response automation"
      ],
      githubUrl: "https://github.com/yourusername/securenet"
    },
    {
      title: "DevConnect - Developer Platform",
      description: "Full-stack social platform for developers with real-time collaboration features and code sharing capabilities.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      type: "fullstack" as const,
      features: [
        "Real-time collaboration",
        "Code sharing & review",
        "Project management",
        "Team communication"
      ],
      githubUrl: "https://github.com/yourusername/devconnect",
      liveUrl: "https://devconnect-demo.com"
    },
    {
      title: "ML Vision - Object Detection",
      description: "Real-time object detection system using deep learning, optimized for edge devices and cloud deployment.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask"],
      type: "ml" as const,
      features: [
        "Real-time object detection",
        "Multi-object tracking",
        "Edge device optimization",
        "Cloud integration"
      ],
      githubUrl: "https://github.com/yourusername/mlvision"
    },
    {
      title: "AlgoMaster - Competitive Programming",
      description: "Collection of optimized algorithms and data structures implementations with visualization tools.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop",
      technologies: ["C++", "Python", "JavaScript", "D3.js"],
      type: "competitive" as const,
      features: [
        "Algorithm visualizations",
        "Performance analysis",
        "Interactive tutorials",
        "Problem solutions"
      ],
      githubUrl: "https://github.com/yourusername/algomaster"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            A collection of projects showcasing my expertise in cybersecurity, full-stack development,
            machine learning, and competitive programming.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;