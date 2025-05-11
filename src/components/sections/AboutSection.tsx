import React from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Code, Layout, Palette, Globe } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { theme } = useTheme();
  const controls = useAnimation();
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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

  // Animation variants
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariant = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 0.2
      }
    }
  };

  return (
    <motion.section
      id="about"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={container}
      className={`py-20 ${theme === 'dark' ? 'bg-gray-950' : 'bg-white'}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image section with enhanced animation */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={imageVariant}
          >
            <div className="relative">
              <motion.div
                className={`absolute inset-0 -z-10 rounded-2xl ${
                  theme === 'dark' ? 'bg-blue-900/20' : 'bg-blue-200/50'
                }`}
                initial={{ x: 0, y: 0 }}
                animate={{ 
                  x: [-4, 4, -4],
                  y: [-4, 4, -4]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="overflow-hidden rounded-2xl shadow-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Alex Morgan - Frontend Developer" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* Content section with staggered animations */}
          <motion.div 
            className="w-full lg:w-1/2"
            variants={container}
          >
            <div className="flex flex-col gap-6">
              <motion.h2 
                className="text-3xl font-bold"
                variants={item}
              >
                <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>About </span>
                <span className={`bg-gradient-to-r ${
                  theme === 'dark' 
                    ? 'from-blue-400 to-teal-400' 
                    : 'from-blue-600 to-teal-600'
                } text-transparent bg-clip-text`}>
                  Me
                </span>
              </motion.h2>
              
              <motion.p 
                className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                variants={item}
              >
                I'm a passionate frontend developer with over 5 years of experience building modern web applications. I specialize in creating beautiful, functional websites that deliver exceptional user experiences.
              </motion.p>
              
              <motion.p 
                className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                variants={item}
              >
                With a strong foundation in HTML, CSS, and JavaScript, and expertise in frameworks like React, I bridge the gap between design and functionality to create seamless digital experiences.
              </motion.p>
              
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4"
                variants={container}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={item}
                    whileHover={{ 
                      y: -5,
                      boxShadow: theme === 'dark' 
                        ? '0 10px 25px -5px rgba(56, 182, 255, 0.2)' 
                        : '0 10px 25px -5px rgba(6, 182, 212, 0.2)'
                    }}
                    className={`p-6 rounded-lg ${
                      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
                    } transition-all`}
                  >
                    <motion.div 
                      className={`mb-4 p-3 rounded-lg inline-block ${
                        theme === 'dark' ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                      }`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;