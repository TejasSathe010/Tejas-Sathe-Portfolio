import React from "react";
import Title from '../layouts/Title';
import { motion } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { testimonials } from "../../data/data";

const Testimonial = () => {
  return (
    <motion.section
      id="testimonial"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
      className="w-full py-24 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 border-b border-gray-300 pb-6">
        <Title title="What my teammates has to say about me" des="Recomendations" />
          <a
            href="https://www.linkedin.com/in/tejas-sathe010/details/recommendations/"
            className="text-2xl text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-white to-gray-100 shadow-lg p-8 rounded-2xl border border-gray-200 transition-all hover:shadow-2xl"
            >
              {/* Profile Section */}
              <div className="flex items-center gap-4 border-b border-gray-300 pb-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </div>
              
              {/* Recommendation Text */}
              <p className="text-base text-gray-700 italic mb-6">
                "{testimonial.recommendation}"
              </p>
              
              {/* LinkedIn Link */}
              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center gap-2"
              >
                <AiFillLinkedin className="text-xl" /> View Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonial;
