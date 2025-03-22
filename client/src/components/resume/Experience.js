import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { jobExperienceData } from "../../data/data";
import { MdWork } from "react-icons/md";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className="grid grid-cols-1 gap-12 px-6 md:px-12 lg:px-20 min-h-screen py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="shadow-lg p-8 rounded-2xl border border-gray-200 transition-all hover:shadow-2xl transform-gpu hover:rotate-1 hover:-translate-y-1"
      >
        {/* Title with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-indigo-600 text-4xl"
          >
            <MdWork />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold text-gray-900"
          >
            Job Experience
          </motion.h2>
        </motion.div>

        {/* Experience Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-4"
        >
          {jobExperienceData.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="flex items-start text-start justify-between w-full p-4 bg-white hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.subTitle}</p>
                  <p className="text-sm text-indigo-600 font-medium">{item.period}</p>
                </div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              
              <motion.div
                className="p-4 bg-gray-50"
                style={{ height: activeIndex === index ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-2">
                  {item.description.map((desc, idx) => (
                    <p key={idx} className="text-sm text-gray-700">{desc}</p>
                  ))}
                  <div className="mt-2">
                    <span className="font-medium text-gray-700">Key Skills:</span>
                    <span className="ml-1 text-sm text-gray-600">{item.keySkills}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;