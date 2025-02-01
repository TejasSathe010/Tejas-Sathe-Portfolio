import React from 'react';

const Title = ({ title, des }) => {
  return (
    <div className="flex flex-col items-start gap-4 mb-14">
      <h3 className="text-sm uppercase text-indigo-600 tracking-wide font-medium">
        {title}
      </h3>
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 capitalize">
        {des}
      </h1>
      <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
    </div>
  );
};

export default Title;