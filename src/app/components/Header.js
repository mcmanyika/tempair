'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const whatsappNumber = "263773808398"; // Replace with your WhatsApp number in international format without '+' or spaces
  const whatsappMessage = "Hello, I'd like to request a quote."; // Replace with your default message

  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow">
      <div className="w-full md:max-w-6xl md:mx-auto py-6 md:px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="relative w-52 h-20">
          <Link href="/" passHref>
            <Image
              src="/images/logo.png" // Path to your logo image in the public folder
              alt="Temp & Air"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <nav className="space-x-4 flex items-center text-sm">
          <a
            href="#about"
            onClick={(e) => handleScroll(e, 'about')}
            className="hidden sm:inline text-gray-900 hover:text-gray-700 cursor-pointer uppercase"
          >
            About Us
          </a>
          <a
            href="#services"
            onClick={(e) => handleScroll(e, 'services')}
            className="hidden sm:inline text-gray-900 hover:text-gray-700 cursor-pointer uppercase"
          >
            Services
          </a>
          {/* <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-customBlue text-white text-sm px-4 py-2 capitalize md:uppercase rounded flex items-center">
              Get Quote <span className="ml-2">&rarr;</span>
            </button>
          </a> */}
          <a
            href="https://www.facebook.com/profile.php?id=61560427566853&mibextid=ZbWKwL" // Replace with your Facebook page URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-gray-700 ml-4"
          >
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '2em', color: '#35a4dc' }} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
