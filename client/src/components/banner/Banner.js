import React, { useRef, useEffect } from 'react';
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";
import { motion, useScroll, useTransform } from 'framer-motion';

const Banner = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -30]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-24 px-12 md:px-24 py-20 md:py-28 overflow-hidden"
    >
      <motion.div
        style={{ opacity, y, scale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-50 to-purple-50 opacity-5" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-purple-100 to-indigo-100 opacity-10 rounded-3xl blur-lg"
        />
      </motion.div>

      <div className="z-10 w-full md:w-1/2 flex flex-col items-start gap-16 text-left max-w-3xl">
        <LeftBanner />
      </div>

      <div className="z-10 w-full md:w-1/2 flex justify-center items-center relative max-w-3xl">
        <RightBanner />
      </div>
    </section>
  );
};

export default Banner;