import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="relative w-32 h-10">
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
        <nav className="space-x-4">
          <Link href="/about" passHref>
            <span className="text-gray-900 hover:text-gray-700 cursor-pointer">About Us</span>
          </Link>
          <Link href="/services" passHref>
            <span className="text-gray-900 hover:text-gray-700 cursor-pointer">Services</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
