import React from 'react';
import { motion } from 'framer-motion';

const ResumeCard = ({ title, subTitle, duration, keySkills, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden transition-all transform duration-300 hover:shadow-2xl"
    >
      {/* Title and Subtitle */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{subTitle}</p>
      </div>

      {/* Duration */}
      <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600 font-medium">
        📅 {duration}
      </div>

      {/* Key Skills */}
      {keySkills && (
        <div className="px-6 py-3 text-sm text-gray-700 border-t border-gray-200">
          <span className="font-semibold text-gray-900">Key Skills:</span> {keySkills}
        </div>
      )}

      {/* Description */}
      <div className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <p key={index} className="mb-2">• {item}</p>
          ))
        ) : (
          <p>• {description}</p>
        )}
      </div>

      {/* Decorative Element */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
    </motion.div>
  );
};

export default ResumeCard;