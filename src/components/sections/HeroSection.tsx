import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const textRef = useRef<HTMLSpanElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(mainRef, { once: true, amount: 0.5 });

  // Typing animation with improved logic
  useEffect(() => {
    const texts = ['Frontend Developer', 'React Specialist', 'React Native Developer'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentText = texts[textIndex];
      
      if (textRef.current) {
        textRef.current.textContent = currentText.substring(0, charIndex);
        textRef.current.style.width = `${currentText.length}ch`; // Fix layout shift
      }

      if (isDeleting) {
        charIndex--;
        typingSpeed = 50;
      } else {
        charIndex++;
        typingSpeed = charIndex % 3 === 0 ? 150 : 100; // Randomize speed for natural feel
      }

      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
      }

      timeout = setTimeout(type, typingSpeed);
    };

    const startTyping = setTimeout(() => {
      if (textRef.current) {
        textRef.current.textContent = '';
        textRef.current.style.borderRight = `2px solid ${theme === 'dark' ? '#4fd1c5' : '#3182ce'}`;
      }
      type();
    }, 1000);

    return () => {
      clearTimeout(startTyping);
      clearTimeout(timeout);
      if (textRef.current) {
        textRef.current.style.borderRight = 'none';
      }
    };
  }, [theme]);

  // Scroll-triggered animations
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

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

  const blobVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 0.2,
      transition: {
        duration: 2,
        ease: 'easeOut'
      }
    }
  };

  return (
    <motion.section
      id="home"
      ref={mainRef}
      initial="hidden"
      animate={controls}
      variants={container}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
          variants={blobVariants}
          custom={0}
        />
        <motion.div
          className="absolute top-40 right-10 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl"
          variants={blobVariants}
          custom={1}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"
          variants={blobVariants}
          custom={2}
        />
      </div>

      <div className="container mx-auto px-6 z-10">
        <motion.div 
          className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto"
          variants={container}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            variants={item}
          >
            <motion.span 
              className={`block mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}
              variants={item}
            >
              Hello, I'm Bakyt Sainaev
            </motion.span>
            <motion.span
              className={`inline-block bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-blue-400 to-teal-400' 
                  : 'from-blue-600 to-teal-600'
              } text-transparent bg-clip-text`}
              ref={textRef}
              variants={item}
              style={{ 
                minHeight: '1.5em',
                display: 'inline-block',
                textAlign: 'center'
              }}
            />
          </motion.h1>

          <motion.p 
            className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-lg`}
            variants={item}
          >
            I build exceptional and accessible digital experiences for the web.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 mt-8"
            variants={item}
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className={`px-6 py-3 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 
                transition-all shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                ${theme === 'dark' ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
            >
              Get in touch
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className={`px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2
                ${theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} 
                transition-all shadow hover:shadow-md`}
              download
            >
              <Download size={18} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll down indicator with animation */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1]
          }}
        >
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection('#about')}
            className={`p-2 rounded-full ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            } transition-all`}
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;