// components/ServiceItem.js
import React from 'react';

const ServiceItem = ({ title, description }) => {
  return (
    <div className="w-full p-2">
      <div className="border min-h-36 flex items-center justify-center hover:bg-gray-100  transition-colors duration-300">
        <div className="text-holder text-center p-2">
          <h3 className="text-xl mb-2">{title}</h3>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
