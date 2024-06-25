'use client'
import React, { useRef } from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  const images = [
    
    
    {
      src: '/images/17.png',
      alt: 'Movable blast freezers',
      width: 800,
      height: 600,
    },
    {
      src: '/images/16.png',
      alt: 'Abbatoir  carcass conveyors',
      width: 800,
      height: 600,
    },
    {
      src: '/images/18.png',
      alt: 'Crane movable cold rooms',
      width: 800,
      height: 600,
    },

    {
      src: '/images/14.png',
      alt: 'Brick & Motor Meat cold rooms',
      width: 800,
      height: 600,
    },
    {
      src: '/images/19.png',
      alt: '',
      width: 800,
      height: 600,
    },
    {
      src: '/images/20.png',
      alt: '',
      width: 800,
      height: 600,
    },

    {
      src: '/images/15.png',
      alt: 'Abbatoir Drip rooms',
      width: 800,
      height: 600,
    },
    {
      src: '/images/21.png',
      alt: 'Industrial chillers maintenance',
      width: 800,
      height: 600,
    },
    {
      src: '/images/6.jpeg',
      alt: '',
      width: 800,
      height: 600,
    },
    {
      src: '/images/12.png',
      alt: 'Customised coldrooms',
      width: 800,
      height: 600,
    },
    {
      src: '/images/22.png',
      alt: 'Commercial Refrigeration specialists',
      width: 800,
      height: 600,
    },
  ];

  const galleryRef = useRef(null);

  const scrollLeft = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id='about'>
      <div className="w-full py-12 px-4 sm:px-6 lg:px-8 mt-5 relative">
        <button
          onClick={scrollLeft}
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white h-12 w-12 rounded-full z-10 hover:bg-gray-400 flex items-center justify-center"
          aria-label="Scroll Left"
        >
          &lt;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white h-12 w-12 rounded-full z-10 hover:bg-gray-400 flex items-center justify-center"
          aria-label="Scroll Right"
        >
          &gt;
        </button>
        <div
          ref={galleryRef}
          className="overflow-x-scroll overflow-y-hidden scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex gap-2">
            {images.map((image, index) => (
              <div key={index} className="relative w-[300px] h-[300px] flex-shrink-0 group">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded">
                  <span className="text-white text-lg capitalize text-center">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
