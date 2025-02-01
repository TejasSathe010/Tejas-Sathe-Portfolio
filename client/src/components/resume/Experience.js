import React from 'react';
import { motion } from 'framer-motion';
import { jobExperienceData } from "../../data/data";
import { MdWork } from "react-icons/md";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-20"
    >
      <div className="shadow-lg p-8 rounded-2xl border border-gray-200 transition-all hover:shadow-2xl">
        {/* Title with Icon */}
        <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-6">
          <div className="text-indigo-600 text-4xl">
            <MdWork />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Job Experience</h2>
        </div>

        {/* Experience Cards */}
        <ul className="space-y-6">
          {jobExperienceData.map((item, index) => (
            <li
              key={index}
              className="flex flex-col gap-2 border-l-4 border-indigo-500 pl-5 relative group"
            >
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700">{item.subTitle}</p>
              {item.duration && (
                <span className="text-sm text-indigo-700 font-medium">
                  Duration: {item.duration}
                </span>
              )}
              {item.responsibilities && (
                <p className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">Key Responsibilities:</span>{" "}
                  {Array.isArray(item.responsibilities)
                    ? item.responsibilities.join(", ")
                    : item.responsibilities}
                </p>
              )}
              {/* Decorative Dot */}
              <span className="absolute -left-2 top-2 w-3 h-3 bg-indigo-500 rounded-full group-hover:scale-125 transition-transform"></span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experience;
