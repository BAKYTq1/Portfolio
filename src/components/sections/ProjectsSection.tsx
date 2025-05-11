import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const ProjectsSection: React.FC = () => {
  const { theme } = useTheme();
  const [filter, setFilter] = useState<string>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for managing online store products, orders, and analytics with real-time data visualization.',
      image: 'https://images.pexels.com/photos/907489/pexels-photo-907489.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Redux', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo-site.com'
    },
    {
      id: 2,
      title: 'Personal Finance Tracker',
      description: 'An application to help users track expenses, set budgets, and visualize spending patterns with interactive charts.',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Next.js', 'MongoDB', 'Express', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://demo-site.com'
    },
    {
      id: 3,
      title: 'Social Media Platform',
      description: 'A modern social platform with features like posts, comments, likes, and user profiles with real-time messaging.',
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo-site.com'
    },
    {
      id: 4,
      title: 'Weather Application',
      description: 'A beautiful weather app that provides current conditions, forecasts, and historical data for locations worldwide.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['JavaScript', 'CSS', 'API Integration'],
      github: 'https://github.com',
      demo: 'https://demo-site.com'
    },
    {
      id: 5,
      title: 'Portfolio Generator',
      description: 'A tool that helps developers create customizable portfolios with minimal setup required.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo-site.com'
    },
    {
      id: 6,
      title: 'Task Management System',
      description: 'A collaborative task management tool with boards, lists, and cards to organize projects and track progress.',
      image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      tags: ['Next.js', 'Redux', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://demo-site.com'
    }
  ];
  
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <section 
      id="projects" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Featured </span>
            <motion.span 
              className={`bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-blue-400 to-teal-400' 
                  : 'from-blue-600 to-teal-600'
              } text-transparent bg-clip-text`}
              initial={{ backgroundPosition: '100% 50%' }}
              whileInView={{ backgroundPosition: '0% 50%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            >
              Projects
            </motion.span>
          </h2>
          
          <p className={`text-lg max-w-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            A selection of my recent work, showcasing my skills in frontend development, UI/UX design, and full-stack capabilities.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === tag
                    ? theme === 'dark'
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-600 text-white'
                    : theme === 'dark'
                      ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project) => (
              <motion.div 
                key={project.id}
                className={`group overflow-hidden rounded-xl ${
                  theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
                } shadow-lg transition-transform hover:-translate-y-2`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: theme === 'dark' 
                    ? '0 10px 25px -5px rgba(56, 182, 255, 0.2)' 
                    : '0 10px 25px -5px rgba(6, 182, 212, 0.2)'
                }}
              >
                <div className="relative overflow-hidden h-48">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <div className="flex gap-4">
                      <motion.a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-900/80 text-white rounded-full hover:bg-gray-800 transition-colors"
                        aria-label={`GitHub repository for ${project.title}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={20} />
                      </motion.a>
                      <motion.a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-600/90 text-white rounded-full hover:bg-blue-500 transition-colors"
                        aria-label={`Live demo for ${project.title}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
                
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <motion.span 
                        key={index}
                        className={`text-xs px-2 py-1 rounded-full ${
                          theme === 'dark' 
                            ? 'bg-gray-800 text-gray-300' 
                            : 'bg-gray-200 text-gray-700'
                        }`}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;