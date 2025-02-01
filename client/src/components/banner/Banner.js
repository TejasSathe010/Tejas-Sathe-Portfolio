import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between gap-12 px-8 md:px-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 py-12 md:py-24"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
};

export default Banner;