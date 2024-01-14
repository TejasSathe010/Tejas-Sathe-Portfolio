import React from 'react';
import Title from '../layouts/Title';
import FeaturesCard from './FeaturesCard';
import { featuresData } from '../../data/data';

const Features = () => {
  return (
    <section id="features" className="w-full py-20 border-b-[1px] border-b-black">
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <FeaturesCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Features;
