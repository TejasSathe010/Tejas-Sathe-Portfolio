import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-8 md:px-16 lg:px-24 bg-gradient-to-br from-gray-50 via-white to-gray-100"
    >
      {/* Left Section */}
      <LeftBanner />

      {/* Right Section */}
      <RightBanner />
    </section>
  );
};

export default Banner;
