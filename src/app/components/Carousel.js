'use client'
import React, { useRef } from 'react';
import Image from 'next/image';

const ImageGallery = () => {
  const images = [
    {
      src: '/images/1.jpeg',
      alt: 'Image 1',
      width: 800,
      height: 600,
    },
    {
      src: '/images/2.jpeg',
      alt: 'Image 2',
      width: 800,
      height: 600,
    },
    {
      src: '/images/3.jpeg',
      alt: 'Image 3',
      width: 800,
      height: 600,
    },
    {
      src: '/images/4.jpeg',
      alt: 'Image 4',
      width: 800,
      height: 600,
    },
    {
      src: '/images/5.jpeg',
      alt: 'Image 5',
      width: 800,
      height: 600,
    },
    {
      src: '/images/6.jpeg',
      alt: 'Image 6',
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
          className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white h-12 w-12 rounded-full z-10 hover:bg-gray-600 flex items-center justify-center"
          aria-label="Scroll Left"
        >
          &lt;
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white h-12 w-12 rounded-full z-10 hover:bg-gray-600 flex items-center justify-center"
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
              <div key={index} className="relative w-[300px] h-[300px] flex-shrink-0">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  className="rounded"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;
