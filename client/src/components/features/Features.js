import React from "react";
import Title from "../layouts/Title";
import FeaturesCard from "./FeaturesCard";
import { featuresData } from "../../data/data";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title Section */}
        <Title title="Expertise" des="What I Do" />

        {/* Features Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {featuresData.map((item) => (
            <FeaturesCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;