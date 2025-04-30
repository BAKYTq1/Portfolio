import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Code, Layout, Palette, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  
  const features = [
    {
      icon: <Code size={24} />,
      title: 'Clean Code',
      description: 'I write clean, maintainable code following best practices and industry standards.'
    },
    {
      icon: <Layout size={24} />,
      title: 'Responsive Design',
      description: 'I create pixel-perfect, fully responsive designs that work on all devices.'
    },
    {
      icon: <Palette size={24} />,
      title: 'Creative UI/UX',
      description: 'I design intuitive user interfaces with a focus on user experience.'
    },
    {
      icon: <Globe size={24} />,
      title: 'SEO Optimized',
      description: 'I build websites with search engine optimization in mind.'
    }
  ];
  
  return (
    <section 
      id="about" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className={`absolute inset-0 -z-10 -translate-x-4 -translate-y-4 rounded-2xl ${
                theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-200/50'
              }`}></div>
              <div className="overflow-hidden rounded-2xl">
                <img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Alex Morgan - Frontend Developer" 
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold">
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>About </span>
                <span className={`bg-gradient-to-r ${
                  theme === 'dark' 
                    ? 'from-blue-400 to-teal-400' 
                    : 'from-blue-600 to-teal-600'
                } text-transparent bg-clip-text`}>
                  Me
                </span>
              </h2>
              
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm a passionate frontend developer with over 5 years of experience building modern web applications. I specialize in creating beautiful, functional websites that deliver exceptional user experiences.
              </p>
              
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                With a strong foundation in HTML, CSS, and JavaScript, and expertise in frameworks like React, I bridge the gap between design and functionality to create seamless digital experiences.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                {features.map((feature, index) => (
                  <div key={index} className={`p-6 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
                  } transition-transform hover:-translate-y-1`}>
                    <div className={`mb-4 p-3 rounded-lg inline-block ${
                      theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;