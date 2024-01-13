import React from 'react'

const Title = ({title, des}) => {
  return (
    <div className="flex flex-col justify-start items-start gap-4 font-titleFont mb-14">
      <h3 className="text-sm uppercase text-gray-500 text-designColor tracking-wide">
       {title}
      </h3>
      <h1 className="text-4xl md:text-5xl text-gray-800 font-bold capitalize">{des}</h1>
    </div>
  );
}

export default Title