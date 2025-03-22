import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import { AiOutlineDownload } from 'react-icons/ai';
import Experience from './Experience';

const Resume = () => {
  const [activeSection, setActiveSection] = useState('experience');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const resumePath = require('../../assets/Tejas-Sathe-Resume.pdf');
      const link = document.createElement('a');
      link.href = resumePath;
      link.download = 'Tejas-Sathe-Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      alert('Failed to download resume. Please try again later.');
    } finally {
      setIsDownloading(false);
    }
  };

  const menuItems = [
    { id: 'skills', label: 'Professional Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
  ];

  return (
    <section id="resume" className="w-full py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 px-8 md:px-16 lg:px-24">
        <Title title="3+ YEARS OF EXPERIENCE" des="My Resume" />

        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-gradient-to-br from-indigo-500 to-purple-500 text-white py-3 px-6 rounded-xl shadow-lg hover:scale-105 transition-transform disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <AiOutlineDownload className="text-xl" />
          <span className="text-base font-medium">Download Resume</span>
          {isDownloading && <span className="animate-pulse">Downloading...</span>}
        </button>
      </div>

      {/* Navigation Menu */}
      <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0 text-gray-700 mt-6 px-8 md:px-16 lg:px-24">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveSection(item.id)}
            className={`px-5 py-2 font-medium text-sm rounded-lg transition duration-300 shadow-sm ${
              activeSection === item.id
                ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white scale-105'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="mt-12 px-8 sm:px-0 md:px-8 lg:px-24">
        <div className="p-0 rounded-2xl">
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'education' && <Education />}
          {/* {activeSection === 'achievements' && <Achievement />} */}
          {activeSection === 'experience' && <Experience />}
        </div>
      </div>
    </section>
  );
};

export default Resume;