import React, { useRef } from "react";
import Title from '../layouts/Title';
import { motion, useScroll, useTransform } from "framer-motion";
import { AiFillLinkedin } from "react-icons/ai";
import { testimonials } from "../../data/data";

const Testimonial = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, y }}
      id="testimonial"
      className="w-full py-24 px-6 md:px-12 lg:px-20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center mb-16 border-b border-gray-200 pb-6"
        >
          <Title 
            title="What my teammates have to say about me" 
            des="Recommendations" 
          />
          
          <motion.a
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            href="https://www.linkedin.com/in/tejas-sathe010/details/recommendations/"
            className="text-2xl text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
            <span className="sr-only">View LinkedIn Recommendations</span>
          </motion.a>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, x: -20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
              className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow transform-gpu hover:scale-105"
            >
              {/* Profile Section */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 p-6 border-b border-gray-200"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0.7 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden"
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <motion.div
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </motion.div>
              </motion.div>
              
              {/* Recommendation Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="p-6"
              >
                <motion.p
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-gray-700 italic mb-4"
                >
                  "{testimonial.recommendation}"
                </motion.p>
                <motion.a
                  initial={{ y: 5, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  href={testimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 flex items-center gap-2"
                >
                  View Profile <AiFillLinkedin className="text-xl" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonial;