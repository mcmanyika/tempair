'use client'
import { useEffect, useState } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full bg-blue-500 text-white p-4 transition-transform duration-300 ${
        isSticky ? 'top-0' : 'bottom-0'
      }`}
    >
      Sticky Header
    </header>
  );
};

export default Header;
