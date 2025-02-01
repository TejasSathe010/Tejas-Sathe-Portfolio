import React from 'react';

const ResumeCard = ({ title, subTitle, duration, keySkills, description }) => {
  return (
    <div className="relative bg-white bg-opacity-90 backdrop-blur-md shadow-lg border border-gray-200 rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
      {/* Title and Subtitle */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{subTitle}</p>
      </div>

      {/* Duration */}
      <p className="text-sm text-gray-600 font-medium mb-3">
        📅 {duration}
      </p>

      {/* Key Skills */}
      {keySkills && (
        <p className="text-sm text-gray-700 mb-3">
          <span className="font-semibold text-gray-900">Key Skills:</span> {keySkills}
        </p>
      )}

      {/* Description */}
      <div className="text-gray-700 text-sm leading-relaxed">
        {Array.isArray(description) ? (
          description.map((item, index) => (
            <p key={index} className="mb-2">• {item}</p>
          ))
        ) : (
          <p>• {description}</p>
        )}
      </div>

      {/* Decorative Element */}
      <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
  );
};

export default ResumeCard;
