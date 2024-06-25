import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-96 bg-cover bg-center flex items-center parallax" style={{ backgroundImage: "url('/images/7.jpeg')" }}>
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-white text-5xl">
          We offer same day service
        </div>
      </div>
    </div>
  );
};

export default Banner;
