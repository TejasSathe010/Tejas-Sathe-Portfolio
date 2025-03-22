import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { educationData, jobExperienceData } from "../../data/data";
import { MdSchool, MdWork } from "react-icons/md";

const Education = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  const renderSection = (data, title, icon) => (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="shadow-lg p-8 rounded-2xl border border-gray-200 transition-all hover:shadow-2xl transform-gpu hover:rotate-1 hover:-translate-y-1"
    >
      {/* Title with Icon */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-indigo-600 text-4xl"
        >
          {icon}
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl font-bold text-gray-900"
        >
          {title}
        </motion.h2>
      </motion.div>

      {/* Resume Cards */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="space-y-6"
      >
        {data.map((item, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 20, x: -20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3 + index * 0.1,
              ease: "easeOut"
            }}
            className="flex flex-col gap-2 border-l-4 border-indigo-500 pl-5 relative group"
          >
            <motion.h3
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm text-gray-700"
            >
              {item.subTitle}
            </motion.p>
            {item.result && (
              <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-indigo-700 font-medium"
              >
                Result: {item.result}
              </motion.span>
            )}
            {item.keySkills && (
              <motion.p
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-sm text-gray-500"
              >
                <span className="font-medium text-gray-700">Key Skills:</span>{" "}
                {Array.isArray(item.keySkills)
                  ? item.keySkills.join(", ")
                  : item.keySkills}
              </motion.p>
            )}
            {/* Decorative Dot */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -left-2 top-2 w-3 h-3 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"
            />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20 min-h-screen py-20"
    >
      {renderSection(educationData, "Education", <MdSchool />)}
      {renderSection(jobExperienceData, "Job Experience", <MdWork />)}
    </motion.div>
  );
};

export default Education;