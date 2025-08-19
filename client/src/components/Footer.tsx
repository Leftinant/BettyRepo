export default function Footer() {
  return (
    <>
      <footer className='footer sm:footer-horizontal bg-pink-200 text-rose-950 p-10'>
        <aside>
          <img src='/logo2.png' alt='logo' className='md:w-30 w-20 h-auto' />
          <p> We Don't Just Do Hair; We Build Relationships!</p>
        </aside>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Color Services</a>
          <a className='link link-hover'>Blowouts </a>
          <a className='link link-hover'>Styling</a>
          <a className='link link-hover'>Haircuts </a>
          <a className='link link-hover'>Trims</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a href='/' className='link link-hover'>
            Home
          </a>
          <a className='link link-hover'>Products</a>
          <a href='/about' className='link link-hover'>
            About Us
          </a>
          <a href='/contact' className='link link-hover'>
            Contact Us
          </a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
    </>
  );
}
