import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const whatsappNumber = "263773808398"; // Replace with your WhatsApp number in international format without '+' or spaces
  const whatsappMessage = "Hello, I'd like to request a quote."; // Replace with your default message

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="relative w-40 h-20">
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
        <nav className="space-x-4 flex items-center">
          <Link href="/about" passHref>
            <span className="hidden sm:inline text-gray-900 hover:text-gray-700 cursor-pointer">About Us</span>
          </Link>
          <Link href="/services" passHref>
            <span className="hidden sm:inline text-gray-900 hover:text-gray-700 cursor-pointer">Services</span>
          </Link>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-customBlue text-white px-4 py-2 rounded">
              Request Quote
            </button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
