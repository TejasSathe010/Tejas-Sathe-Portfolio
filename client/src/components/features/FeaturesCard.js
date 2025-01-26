import React from "react";
import { HiArrowRight } from "react-icons/hi";

const FeaturesCard = ({ item: { title, des, icon, link } }) => {
  return (
    <div className="relative w-full h-auto p-8 rounded-xl shadow-lg bg-white border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
      {/* Icon Section */}
      <div className="flex items-center justify-center w-16 h-16 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white text-3xl mb-6 shadow-md">
        {icon}
      </div>

      {/* Content Section */}
      <h3 className="text-lg font-semibold text-gray-800 mb-4 transition-colors group-hover:text-indigo-600">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed mb-6">
        {des}
      </p>

      {/* Learn More Link */}
      <a
        href={link}
        className="inline-flex items-center text-indigo-500 font-medium hover:text-indigo-700 transition-colors duration-300"
      >
        Learn More
        <HiArrowRight className="ml-2 text-lg" />
      </a>
    </div>
  );
};

export default FeaturesCard;