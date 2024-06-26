// components/Services.js
import React from 'react';
import ServiceItem from './ServiceItem';

const servicesData = [
  {
    title: "Cold chain equipment",
    description: "We provide top-notch equipment and spares for cold chain systems.",
    link: "/services/procurement"
  },
  {
    title: "Air-conditioning and ventilation",
    description: "Central units, split units, window units, and more.",
    link: "/services/air-conditioning"
  },
  {
    title: "Refrigeration",
    description: "Industrial process chillers, ice makers, and maintenance services.",
    link: "/services/refrigeration"
  },
  {
    title: "Solar technologies",
    description: "Harness solar energy for efficient heating and cooling.",
    link: "/services/solar-technologies"
  },
  {
    title: "Electrical contracting",
    description: "Comprehensive electrical services for all your needs.",
    link: "/services/electrical-contracting"
  },
  {
    title: "LPG applications",
    description: "Reliable LPG solutions for various applications.",
    link: "/services/lpg-applications"
  },
  
];

const Services = () => {
  return (
    <div className="max-w-7xl mx-auto mb-12" id='services'>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-16">
        {servicesData.map((service, index) => (
          <ServiceItem 
            key={index} 
            title={service.title} 
            description={service.description} 
            link={service.link} 
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
