import React from 'react';
import { useTheme } from '../../context/ThemeContext';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

const SkillsSection: React.FC = () => {
  const { theme } = useTheme();
  
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML5', level: 95, category: 'frontend' },
    { name: 'CSS3/SCSS', level: 90, category: 'frontend' },
    { name: 'JavaScript', level: 90, category: 'frontend' },
    { name: 'TypeScript', level: 85, category: 'frontend' },
    { name: 'React', level: 90, category: 'frontend' },
    { name: 'Redux', level: 80, category: 'frontend' },
    { name: 'Next.js', level: 85, category: 'frontend' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 75, category: 'backend' },
    { name: 'Express', level: 70, category: 'backend' },
    { name: 'GraphQL', level: 65, category: 'backend' },
    { name: 'RESTful APIs', level: 85, category: 'backend' },
    
    // Tools
    { name: 'Git/GitHub', level: 90, category: 'tools' },
    { name: 'Webpack', level: 75, category: 'tools' },
    { name: 'Jest', level: 80, category: 'tools' },
    { name: 'CI/CD', level: 70, category: 'tools' },
    
    // Design
    { name: 'Figma', level: 85, category: 'design' },
    { name: 'Adobe XD', level: 75, category: 'design' },
    { name: 'UI/UX Design', level: 80, category: 'design' }
  ];
  
  // Group skills by category
  const categories = {
    frontend: skills.filter(skill => skill.category === 'frontend'),
    backend: skills.filter(skill => skill.category === 'backend'),
    tools: skills.filter(skill => skill.category === 'tools'),
    design: skills.filter(skill => skill.category === 'design')
  };
  
  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Knowledge',
    tools: 'Tools & Workflow',
    design: 'Design Skills'
  };
  
  return (
    <section 
      id="skills" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>My </span>
            <span className={`bg-gradient-to-r ${
              theme === 'dark' 
                ? 'from-blue-400 to-teal-400' 
                : 'from-blue-600 to-teal-600'
            } text-transparent bg-clip-text`}>
              Skills & Expertise
            </span>
          </h2>
          
          <p className={`text-lg max-w-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            My skills and technologies across different areas of web development and design. I'm always learning and expanding my skillset.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {(Object.keys(categories) as Array<keyof typeof categories>).map((category) => (
            <div key={category} className={`p-6 rounded-lg ${
              theme === 'dark' ? 'bg-gray-950' : 'bg-white'
            } shadow-lg`}>
              <h3 className="text-xl font-semibold mb-6 pb-3 border-b border-gray-700">
                {categoryTitles[category]}
              </h3>
              
              <div className="flex flex-col gap-5">
                {categories[category].map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className={`w-full h-2 rounded-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${
                          theme === 'dark' ? 'from-blue-500 to-teal-500' : 'from-blue-600 to-teal-600'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;