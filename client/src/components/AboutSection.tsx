export default function AboutSection() {
  return (
    <>
      <div className='min-h-screen bg-[url("/ground.jpg")] bg-cover bg-center bg-fixed'>
        <div className='flex pt-32 overflow-hidden py-10 bg-white/10 backdrop-blur-md text-rose-950 justify-center '>
          <h1 className='text-[3em] font-bold'>About Us</h1>
        </div>
        <div className='bg-pink-100 w-full md:p-10 p-5 text-black text-center'>
          <h2 className='md:text-2xl text-xl'>
            <span className='text-amber-500 '>—</span> Our Story
          </h2>
          <h3 className='md:text-4xl text-2xl font-bold my-5'>
            Not just as a beauty spot;{" "}
            <span className='text-amber-500'>
              But <br />
              as a sanctuary of Care, Connection and Style
            </span>
          </h3>
          <p className='md:mx-100 text-gray-800'>
            Every stylist takes time to understand their clients' needs,
            ensuring each visit feels intimate and affirming. Whether it's
            keeping up with trends or perfecting timeless looks, the team is
            committed to helping you feel confident and cared for.
          </p>
        </div>
        <div className='md:px-20 px-4 pb-10 bg-pink-100 w-full'>
          <div className='w-full flex md:flex-row flex-col-reverse'>
            <div className='m-5 '>
              <img
                src='sample1.png'
                alt='sample'
                className='w-150 rounded-4xl transition duration-1000 md:opacity-50 hover:scale-90 hover:opacity-100 cursor-pointer'
              />
            </div>
            <div className='flex flex-col'>
              <div className='m-5'>
                <img
                  src='sample4.png'
                  alt='two'
                  className='w-150 rounded-4xl transition duration-1000 md:opacity-50 hover:scale-90 hover:opacity-100 cursor-pointer'
                />
              </div>
              <div className='m-5'>
                <img
                  src='sample6.jpg'
                  alt='three'
                  className='w-150 rounded-4xl transition duration-1000 md:opacity-50 hover:scale-90 hover:opacity-100 cursor-pointer'
                />
              </div>
            </div>
            <div className='m-5'>
              <img
                src='sample2.jpg'
                alt='sample'
                className='w-150 rounded-4xl transition duration-1000 md:opacity-50 hover:scale-90 hover:opacity-100 cursor-pointer'
              />
            </div>
          </div>
          <div className='w-full bg-rose-950 text-pink-200 md:p-10 p-5 flex justify-around rounded-2xl'>
            <div className='border-r-1  md:pr-30 pr-2'>
              <span className='font-bold md:text-4xl '>10+</span>
              <br />
              <span className='md:text-3xl'>Years</span>
            </div>
            <div className='border-r-1  md:pr-30 pr-2'>
              <span className='font-bold md:text-4xl'>1000+</span>
              <br />
              <span className='md:text-3xl'>Customers</span>
            </div>
            <div className='border-r-1  md:pr-30 pr-2'>
              <span className='font-bold md:text-4xl'>98%</span>
              <br />
              <span className='md:text-3xl'>Satisfied</span>
            </div>
            <div className=''>
              <span className='font-bold md:text-4xl'>98%</span>
              <br />
              <span className='md:text-3xl'>Satisfied</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
