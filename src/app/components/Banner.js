import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-72 bg-cover bg-center flex items-center parallax" style={{ backgroundImage: "url('/images/7.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-white capitalize font-thin text-2xl md:text-5xl p-4 border">
          We offer same day service
        </div>
      </div>
    </div>
  );
};

export default Banner;
