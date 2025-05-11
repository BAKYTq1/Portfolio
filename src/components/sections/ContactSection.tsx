import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    status: 'idle' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Просто выводим данные в консоль
      console.log('Форма отправлена:', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });

      // Имитируем успешную отправку
      setSubmitStatus({
        status: 'success',
        message: 'Сообщение отправлено! (Это демо-режим)'
      });

      // Очищаем форму
      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      setSubmitStatus({
        status: 'error',
        message: 'Ошибка: ' + error
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... (остальная часть компонента БЕЗ ИЗМЕНЕНИЙ)
  // Верстка формы и контактной информации остается прежней
  
  
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'bsainaev@gmail.com',
      link: 'mailto:bsainaev@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+996 703 829 576',
      link: 'tel:+996703829576'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Bishkek',
      link: 'https://www.google.com/maps/@42.88506,74.6056785,11z?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">
            <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Get in </span>
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
              Touch
            </motion.span>
          </h2>
          
          <p className={`text-lg max-w-2xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Have a project in mind or want to discuss an opportunity? I'd love to hear from you. Let's connect and make something amazing together.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact form */}
          <motion.div 
            className={`p-8 rounded-xl shadow-lg ${
              theme === 'dark' ? 'bg-gray-950' : 'bg-white'
            }`}
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Send me a message
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <label 
                  htmlFor="name" 
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-gray-900 text-white border-gray-700 focus:border-blue-500' 
                      : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-600'
                  } border focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="John Doe"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                <label 
                  htmlFor="email" 
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-gray-900 text-white border-gray-700 focus:border-blue-500' 
                      : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-600'
                  } border focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="john@example.com"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label 
                  htmlFor="subject" 
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-gray-900 text-white border-gray-700 focus:border-blue-500' 
                      : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-600'
                  } border focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Project Inquiry"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label 
                  htmlFor="message" 
                  className={`block mb-2 text-sm font-medium ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-md ${
                    theme === 'dark' 
                      ? 'bg-gray-900 text-white border-gray-700 focus:border-blue-500' 
                      : 'bg-gray-100 text-gray-900 border-gray-300 focus:border-blue-600'
                  } border focus:outline-none focus:ring-1 focus:ring-blue-500`}
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center gap-2 mt-2 px-6 py-3 rounded-md font-medium text-white 
                  ${isSubmitting 
                    ? 'bg-gray-500 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'} 
                  transition-colors shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                  ${theme === 'dark' ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
              
              {submitStatus.status !== 'idle' && (
                <motion.div 
                  className={`mt-4 p-3 rounded-md ${
                    submitStatus.status === 'success' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitStatus.message}
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact info */}
          <div className="flex flex-col">
            <motion.div 
              className={`p-8 rounded-xl shadow-lg mb-8 ${
                theme === 'dark' ? 'bg-gray-950' : 'bg-white'
              }`}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Contact Information
              </h3>
              
              <div className="flex flex-col gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a 
                    key={index}
                    href={info.link}
                    target={info.title === 'Location' ? '_blank' : undefined}
                    rel={info.title === 'Location' ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className={`p-3 rounded-lg ${
                        theme === 'dark' 
                          ? 'bg-gray-900 text-blue-400 group-hover:bg-blue-800 group-hover:text-white' 
                          : 'bg-gray-100 text-blue-600 group-hover:bg-blue-100'
                      } transition-colors`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {info.icon}
                    </motion.div>
                    
                    <div>
                      <h4 className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {info.title}
                      </h4>
                      <p className={`text-lg font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'} group-hover:text-blue-500 transition-colors`}>
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className={`p-8 rounded-xl shadow-lg h-[330px] ${
                theme === 'dark' ? 'bg-gray-950' : 'bg-white'
              }`}
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className={`text-xl font-semibold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Availability
              </h3>
              
              <div className="space-y-4">
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  I'm currently available for freelance work and full-time opportunities.
                </p>
                
                <motion.div 
                  className={`p-4 rounded-lg ${
                    theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <h4 className={`text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    Working Hours
                  </h4>
                  <p className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Monday - Friday: 9:00 AM - 8:00 PM PST
                  </p>
                </motion.div>
                
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  I typically respond to emails within 24 hours during business days.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;