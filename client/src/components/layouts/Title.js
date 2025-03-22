import React from 'react';
import { motion } from 'framer-motion';

const Title = ({ title, description, className = '' }) => {
  return (
    <div className={`flex flex-col items-start gap-6 mb-16 ${className}`}>
      {/* Subtitle */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-sm uppercase text-indigo-600 tracking-wide font-medium"
      >
        {title}
      </motion.h3>
      
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 capitalize leading-tight"
      >
        {description}
      </motion.h1>
      
      {/* Decorative Line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
        className="w-full max-w-sm h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
      />
    </div>
  );
};

export default Title;