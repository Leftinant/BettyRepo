import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=' z-99 fixed top-0 left-0 w-screen bg-rose-200'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xl font-bold text-rose-950 '>
        <div className='flex justify-between items-center '>
          <div className='hidden md:flex space-x-30'>
            <a href='/' className='hover:overline '>
              Home
            </a>
            <a href='#' className='hover:overline'>
              Products
            </a>
          </div>

          <div className='bg-white/20 rounded-full'>
            <img src='/logo2.png' alt='logo' className='md:w-25 w-20 h-auto' />
          </div>

          <div className='hidden md:flex space-x-30 items-center'>
            <a href='/about' className='hover:overline'>
              About
            </a>
            <a href='/contact' className='hover:overline'>
              Contact
            </a>
            <button className='btn border-none bg-pink-300 text-rose-950 font-medium p-4 rounded-full hover:bg-rose-950 hover:text-pink-300 transition duration-2000'>
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
        <div className='md:hidden p-5 pl-15 text-rose-950 text-lg font-semibold text-right space-y-3  fixed right-0 bg-white/20 backdrop-blur-md'>
          <a href='/' className='block '>
            Home
          </a>
          <a href='#' className='block '>
            Products
          </a>
          <a href='/about' className='block '>
            About
          </a>
          <a href='/contact' className='block '>
            Contacts
          </a>
        </div>
      )}
    </nav>
  );
}
