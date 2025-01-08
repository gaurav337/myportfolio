import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Code, Brain, Terminal, Server, Database } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
  delay: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:bg-gray-800/70 transition-all"
  >
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 rounded-full hover:bg-blue-500/20 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

const SkillSection = () => {
  const skillCategories = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
      skills: ["Network Security", "Penetration Testing", "Cryptography", "Security Auditing", "Vulnerability Assessment"]
    },
    {
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6 text-blue-400" />,
      skills: ["React.js", "Node.js", "MongoDB", "Express.js", "TypeScript", "REST APIs"]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Computer Vision", "NLP"]
    },
    {
      title: "Competitive Programming",
      icon: <Terminal className="w-6 h-6 text-blue-400" />,
      skills: ["C++", "Python", "Data Structures", "Algorithms", "Problem Solving"]
    },
    {
      title: "Backend Technologies",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      skills: ["Django", "FastAPI", "GraphQL", "Docker", "AWS", "Microservices"]
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6 text-blue-400" />,
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Database Design"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skillCategories.map((category, index) => (
        <SkillCard
          key={category.title}
          title={category.title}
          skills={category.skills}
          icon={category.icon}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};

export default SkillSection;