export default function ContactSection() {
  return (
    <>
      <div className='min-h-screen bg-[url("/ground.jpg")] bg-cover bg-center bg-fixed'>
        <div className='flex pt-32 overflow-hidden py-10 bg-white/10 backdrop-blur-md text-rose-950 justify-center '>
          <h1 className='text-[3em] font-bold'>Contact Us</h1>
        </div>
        <div className='bg-pink-100 text-black md:px-20 px-5 py-10 flex md:flex-row flex-col justify-around'>
          <div>
            <h1 className='text-4xl font-semibold text-rose-950 mb-5'>
              Get In Touch
            </h1>
            <p>
              For appointments or inquiries, feel free to reach out to us. We're
              here to assist you in achieving your hair care goals.
            </p>
            <form action='' className='my-10'>
              <div className='flex md:flex-row flex-col justify-between mb-5'>
                <div>
                  <label className='text-xl font-semibold'>Your Name *</label>
                  <input
                    type='name'
                    className='input bg-pink-100 border-gray-300 rounded-4xl mt-2'
                    placeholder='Name'
                    required
                  />
                </div>
                <div>
                  <label className='text-xl font-semibold'>Email *</label>
                  <input
                    type='email'
                    className='input bg-pink-100 border-gray-300 rounded-4xl mt-2'
                    placeholder='example@gmail.com'
                    required
                  />
                </div>
              </div>
              <label className='text-xl font-semibold '>Subject *</label>
              <br />
              <input
                type='name'
                className='input bg-pink-100 border-gray-300 rounded-4xl w-full mt-2 mb-5'
                placeholder='Enter Subject'
                required
              />
              <label className='text-xl font-semibold '>Your Message *</label>
              <br />
              <textarea
                className='textarea bg-pink-100 w-full border-gray-300 rounded-2xl mt-2 '
                placeholder='Write your Message here...'></textarea>
              <button className='btn p-5 my-10 bg-rose-950 text-pink-200 rounded-4xl'>
                Send Message
              </button>
            </form>
          </div>
          <div className='bg-rose-950 text-pink-200 p-10 pr-15 rounded-4xl space-y-2'>
            <h2 className='text-2xl font-semibold mb-3'>Say Hello </h2>
            <p>
              <i className='fas fa-phone text-xl' /> : (254) 717 687 270
            </p>
            <p className='mb-10'>
              <i className='fas fa-envelope text-xl' /> : Bettykwaks@gmail.com{" "}
            </p>
            <h2 className='text-2xl font-semibold mb-3'>Our Address</h2>
            <p>Eastern Bypass, Membly,</p>
            <p className='mb-10'>Rolex, Opposite evib sports center</p>
            <h2 className='text-2xl font-semibold mb-3'>Opening Hours</h2>
            <p>Monday - Friday : 8:00am-9:00pm </p>
            <p>Saturday: 9:30am-9:00pm</p>
            <p className='mb-10'>Sunday: 11:00am-7:00pm</p>
            <h2 className='text-2xl font-semibold mb-3'>Stay Connected</h2>
            <div className='flex justify-around text-2xl'>
              <i className='fas fa-envelope ' />
              <i className='fas fa-envelope ' />
              <i className='fas fa-envelope ' />
            </div>
          </div>
        </div>
        <div className='w-full h-100 flex justify-items-center'>
          <img src='map.png' alt='map' className='w-full ' />
        </div>
      </div>
    </>
  );
}
