import React from 'react';
import { HiArrowRight } from 'react-icons/hi';

const FeaturesCard = ({ item: { title, des, icon, link } }) => {
  const renderIcon = () => {
    if (icon) {
      return <span className="text-5xl text-gray-800">{icon}</span>;
    } else {
      return (
        <>
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="w-full h-[2px] rounded-lg bg-designColor inline-flex"
            ></span>
          ))}
        </>
      );
    }
  };

  return (
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-2xl flex items-center bg-gradient-to-r from-slate-50 to-slate-200 group hover:bg-gradient-to-b hover:from-slate-200 hover:to-slate-50 transition-colors duration-100 group">
      <div className="h-72 overflow-y-hidden">
        <div className="flex h-full flex-col gap-10 translate-y-16 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {renderIcon()}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-xl md:text-2xl font-titleFont font-bold text-designColor">
              {title}
            </h2>
            <p className="base">{des}</p>
            <span className="text-2xl text-gray-800">
              <a href={link}><HiArrowRight /></a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
