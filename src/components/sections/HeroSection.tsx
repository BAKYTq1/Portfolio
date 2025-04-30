import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const HeroSection: React.FC = () => {
  const { theme } = useTheme();
  const textRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    // Typing animation effect
    const texts = ['Frontend Developer', 'React Specialist', 'React Native' ];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        if (textRef.current) {
          textRef.current.textContent = currentText.substring(0, charIndex - 1);
        }
        charIndex--;
        typingSpeed = 50;
      } else {
        if (textRef.current) {
          textRef.current.textContent = currentText.substring(0, charIndex + 1);
        }
        charIndex++;
        typingSpeed = 100;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        // Pause at end of typing
        isDeleting = true;
        typingSpeed = 1500;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500;
      }
      
      setTimeout(type, typingSpeed);
    };
    
    const timeout = setTimeout(type, 1000);
    return () => clearTimeout(timeout);
  }, []);
  
  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <span className={`block mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Hello, I'm Bakyt Sainaev
            </span>
            <span 
              className={`bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'from-blue-400 to-teal-400' 
                  : 'from-blue-600 to-teal-600'
              } text-transparent bg-clip-text`}
              ref={textRef}
            >
              Frontend Developer
            </span>
          </h1>
          
          <p className={`text-lg md:text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} max-w-lg`}>
            I build exceptional and accessible digital experiences for the web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a 
              href="#contact" 
              className={`px-6 py-3 rounded-md font-medium text-white bg-blue-600 hover:bg-blue-700 
                transition-colors shadow-lg hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                ${theme === 'dark' ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}`}
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                  });
                }
              }}
            >
              Get in touch
            </a>
            
            <a 
              href="/resume.pdf" 
              className={`px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2
                ${theme === 'dark' 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} 
                transition-colors`}
              download
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button 
            onClick={scrollToNextSection}
            className={`p-2 rounded-full ${
              theme === 'dark' 
                ? 'text-gray-400 hover:text-white hover:bg-gray-800' 
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
            } transition-colors`}
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;