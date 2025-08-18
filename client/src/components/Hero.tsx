export default function Hero() {
  return (
    <>
      <div className='min-h-screen bg-[url("/ground.jpg")] bg-cover bg-center bg-fixed'>
        <div className='flex justify-center items-center pt-40 h-150 px-4 overflow-hidden py-10 '>
          <div className='py-15 px-20 bg-white/20 backdrop-blur-md  rounded-4xl text-rose-950 text-center'>
            <h1 className='text-[3em] font-bold  mb-10'>Betty Salon</h1>
            <p className='text-xl mb-5'>
              Your Hair, Your Crown – Let’s Make It Shine!
            </p>
            <button className='btn btn-outline text-rose-950 border-rose-950 hover:bg-rose-950 hover:text-gray-300 transition duration-2000 rounded-xl'>
              Book Online
            </button>
          </div>
        </div>
        <div className='relative h-auto w-full flex flex-col md:flex-row justify-around'>
          <div className='absolute top-0 left-0 w-full h-1/3 bg-white/1  z-0' />
          <div className='absolute bottom-0 left-0 w-full h-2/3 bg-pink-100 z-0' />
          <div className='relative z-10 flex md:w-1/3 flex-col justify-center items-center h-full text-black'>
            <img
              src='/color.png'
              alt='Beauty model'
              className='h-72 w-72 bg-rose-950 object-center rounded-full shadow-lg'
            />
            <div className='text-center  py-10 px-20 '>
              <h2 className='font-semibold text-xl'>Color Services</h2>
              <p>
                Whether you're looking for a subtle change or a bold new color,
                we offer a range of coloring services including highlights,
                balayage, and full color.
              </p>
            </div>
          </div>
          <div className='relative z-10 md:w-1/3 flex flex-col justify-center items-center h-full text-black'>
            <img
              src='/style.png'
              alt='Beauty model'
              className='h-72 w-72 bg-rose-200 object-center rounded-full shadow-lg'
            />
            <div className='text-center py-10 px-20'>
              <h2 className='font-semibold text-xl'>Blowouts and Styling</h2>
              <p>
                Perfect for special occasions or just a night out, our blowouts
                and styling services will leave you looking fabulous.
              </p>
            </div>
          </div>
          <div className='relative z-10 md:w-1/3 flex flex-col justify-center items-center h-full text-black'>
            <img
              src='/trim.png'
              alt='Beauty model'
              className='h-72 w-72 bg-rose-950 object-center rounded-full shadow-lg'
            />
            <div className='text-center py-10 px-20'>
              <h2 className='font-semibold text-xl'>Haircuts and Trims</h2>
              <p>
                From classic cuts to modern styles, our expert stylists will
                help you find the perfect look.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
