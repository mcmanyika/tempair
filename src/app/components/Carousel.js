// components/ImageGallery.js
import React from 'react';
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
    ,
    {
      src: '/images/4.jpeg',
      alt: 'Image 3',
      width: 800,
      height: 600,
    },
    ,
    {
      src: '/images/5.jpeg',
      alt: 'Image 3',
      width: 800,
      height: 600,
    },
    ,
    {
      src: '/images/6.jpeg',
      alt: 'Image 3',
      width: 800,
      height: 600,
    },
  ];

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[300px]">
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
  );
};

export default ImageGallery;
