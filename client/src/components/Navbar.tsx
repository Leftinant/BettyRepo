import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=' z-99 fixed top-0 left-0 w-screen'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xl font-bold text-rose-950 '>
        <div className='flex justify-between items-center '>
          <div className='hidden md:flex space-x-20'>
            <a href='#' className='hover:text-pink-300'>
              Home
            </a>
            <a href='#' className='hover:text-pink-300'>
              About
            </a>
            <a href='#' className='hover:text-pink-300'>
              Products
            </a>
          </div>

          <div className='bg-white/10 rounded-full'>
            <img src='/logo2.png' alt='logo' className='md:w-30 w-20 h-auto' />
          </div>

          <div className='hidden md:flex space-x-20 items-center'>
            <a href='#' className='hover:text-pink-300'>
              Gallery
            </a>
            <a href='#' className='hover:text-pink-300'>
              Contact
            </a>
            <button className='btn border-none bg-pink-300 text-rose-950 font-medium p-4 rounded-full hover:bg-pink-400 transition duration-1000'>
              Book Now
            </button>
          </div>

          <div className='md:hidden flex items-center'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg
                className='w-6 h-6 text-white'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                viewBox='0 0 24 24'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden p-5 pl-15 text-rose-950 text-lg text-right space-y-3  fixed right-0 bg-white/20'>
          <a href='#' className='block hover:text-pink-300'>
            Home
          </a>
          <a href='#' className='block hover:text-pink-300'>
            About
          </a>
          <a href='#' className='block hover:text-pink-300'>
            Products
          </a>
          <a href='#' className='block hover:text-pink-300'>
            Gallery
          </a>
          <a href='#' className='block hover:text-pink-300'>
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
}
