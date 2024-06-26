import React from 'react';

function CallToAction() {
  const whatsappNumber = "263773808398"; // Replace with your WhatsApp number in international format without '+' or spaces
  const whatsappMessage = "Hello, I'd like to request a quote."; // Replace with your default message

  return (
    <div className='bg-callBlue h-72 text-center flex flex-col items-center justify-center p-12'>
      <div className='text-3xl w-full'>WE CARE ABOUT YOUR NEEDS</div>
      <div className='w-full m-5'>Request a quote now to get the equipment you need at the most competitive prices.</div>
      <div className='flex items-center justify-center mt-4'>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-customBlue text-white text-sm px-4 py-2 capitalize md:uppercase rounded flex items-center">
            Get Quote <span className="ml-2">&rarr;</span>
          </button>
        </a>
      </div>
    </div>
  );
}

export default CallToAction;
