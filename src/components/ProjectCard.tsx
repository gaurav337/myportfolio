import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Lock, Code } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  type: 'security' | 'fullstack' | 'ml' | 'competitive';
  features: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  type,
  features
}) => {
  const typeIcons = {
    security: <Lock className="w-5 h-5" />,
    fullstack: <Code className="w-5 h-5" />,
    ml: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M2 12h20M2 2l20 20M22 2L2 22"/></svg>,
    competitive: <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 15l-3-3m0 0l3-3m-3 3h12M4 20V4"/></svg>
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        <div className="absolute top-4 right-4 bg-blue-500/20 p-2 rounded-full backdrop-blur-sm">
          {typeIcons[type]}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{description}</p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-blue-500/10 text-blue-400 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-300 text-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
              {feature}
            </div>
          ))}
        </div>

        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <Github size={20} className="mr-2" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-400 hover:text-blue-400 transition-colors"
            >
              <ExternalLink size={20} className="mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;