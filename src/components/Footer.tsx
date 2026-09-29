import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-black text-white'>
      <div className='footer sm:footer-horizontal max-w-7xl mx-auto px-10 pt-12 pb-10'>
        <aside className='max-w-xs'>
          <h2 className='text-lg font-semibold'>CS — Ticket System</h2>
          <p className='text-sm text-gray-400 leading-relaxed'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </aside>

        <nav>
          <h6 className='font-medium mb-2'>Company</h6>
          <a className='text-sm text-gray-400 link link-hover'>About Us</a>
          <a className='text-sm text-gray-400 link link-hover'>Our Mission</a>
          <a className='text-sm text-gray-400 link link-hover'>Contact Sales</a>
        </nav>

        <nav>
          <h6 className='font-medium mb-2'>Services</h6>
          <a className='text-sm text-gray-400 link link-hover'>
            Products & Services
          </a>
          <a className='text-sm text-gray-400 link link-hover'>
            Customer Stories
          </a>
          <a className='text-sm text-gray-400 link link-hover'>Download Apps</a>
        </nav>

        <nav>
          <h6 className='font-medium mb-2'>Information</h6>
          <a className='text-sm text-gray-400 link link-hover'>
            Privacy Policy
          </a>
          <a className='text-sm text-gray-400 link link-hover'>
            Terms & Conditions
          </a>
          <a className='text-sm text-gray-400 link link-hover'>Join Us</a>
        </nav>

        <nav>
          <h6 className='font-medium mb-2'>Social Links</h6>
          <a className='flex items-center gap-2 text-sm text-gray-400 link link-hover'>
            <FaTwitter className='bg-white text-black rounded-full p-0.5' /> @CS
            — Ticket System
          </a>
          <a className='flex items-center gap-2 text-sm text-gray-400 link link-hover'>
            <FaLinkedin className='bg-white text-black rounded-full p-0.5' />{' '}
            @CS — Ticket System
          </a>
          <a className='flex items-center gap-2 text-sm text-gray-400 link link-hover'>
            <FaFacebook className='bg-white text-black rounded-full p-0.5' />{' '}
            @CS — Ticket System
          </a>
          <a className='flex items-center gap-2 text-sm text-gray-400 link link-hover'>
            <span
              aria-hidden='true'
              className='inline-flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs font-bold text-black'
            >
              @
            </span>{' '}
            support@cst.com
          </a>
        </nav>
      </div>

      <div className='max-w-7xl mx-auto px-10'>
        <div className='border-t border-gray-800 py-6 text-center text-sm text-gray-300'>
          © 2025 CS — Ticket System. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
