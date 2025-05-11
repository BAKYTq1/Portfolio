import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

// Анимационные конфиги
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100
    }
  }
};

const progressBar = {
  hidden: { width: 0 },
  visible: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1.5,
      type: 'spring',
      bounce: 0.3
    }
  })
};

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  
  const SKILLS: Skill[] = [
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3/SCSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'Redux', level: 80, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Express', level: 70, category: 'backend' },
    { name: 'GraphQL', level: 65, category: 'backend' },
    { name: 'RESTful APIs', level: 85, category: 'backend' },
    { name: 'Git/GitHub', level: 90, category: 'tools' },
    { name: 'Webpack', level: 75, category: 'tools' },
    { name: 'Jest', level: 80, category: 'tools' },
    { name: 'CI/CD', level: 70, category: 'tools' },
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'Adobe XD', level: 75, category: 'design' },
    { name: 'UI/UX Design', level: 80, category: 'design' }
  ];

  const CATEGORIES = {
    frontend: 'Frontend Development',
    backend: 'Backend Knowledge',
    tools: 'Tools & Workflow',
    design: 'Design Skills'
  };

  const groupedSkills = React.useMemo(() => ({
    frontend: SKILLS.filter(skill => skill.category === 'frontend'),
    backend: SKILLS.filter(skill => skill.category === 'backend'),
    tools: SKILLS.filter(skill => skill.category === 'tools'),
    design: SKILLS.filter(skill => skill.category === 'design')
  }), []);

  const colors = {
    bgSection: theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
    bgCard: theme === 'dark' ? 'bg-gray-950' : 'bg-white',
    textPrimary: theme === 'dark' ? 'text-gray-300' : 'text-gray-700',
    textSecondary: theme === 'dark' ? 'text-gray-400' : 'text-gray-600',
    gradient: theme === 'dark' 
      ? 'from-blue-500 to-teal-500' 
      : 'from-blue-600 to-teal-600',
    gradientText: theme === 'dark'
      ? 'from-blue-400 to-teal-400'
      : 'from-blue-600 to-teal-600'
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${colors.bgSection}`}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className={colors.textPrimary}>My </span>
            <motion.span 
              className={`bg-gradient-to-r ${colors.gradientText} text-transparent bg-clip-text`}
              initial={{ backgroundPosition: '100% 50%' }}
              whileInView={{ backgroundPosition: '0% 50%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            >
              Skills & Expertise
            </motion.span>
          </h2>
          
          <motion.p 
            className={`text-lg max-w-2xl ${colors.textSecondary}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            My skills and technologies across different areas of web development and design.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {(Object.keys(groupedSkills) as Array<keyof typeof groupedSkills>).map((category) => (
            <motion.div 
              key={category}
              variants={item}
              className={`p-6 rounded-lg ${colors.bgCard} shadow-lg`}
              whileHover={{ 
                y: -5,
                boxShadow: theme === 'dark' 
                  ? '0 10px 25px -5px rgba(56, 182, 255, 0.2)' 
                  : '0 10px 25px -5px rgba(6, 182, 212, 0.2)'
              }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-700">
                {CATEGORIES[category]}
              </h3>
              
              <div className="flex flex-col gap-5">
                {groupedSkills[category].map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex flex-col gap-2"
                    variants={item}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${colors.textPrimary}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${colors.textSecondary}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${colors.gradient}`}
                        variants={progressBar}
                        custom={skill.level}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;