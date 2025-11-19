import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    <footer className="header-dark pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b pb-10" style={{ borderColor: 'var(--dark-border)' }}>

          {/* 1. Contact Form */}
          <div id="contact" data-aos="fade-up">
            <h3 className="body-dark text-xl font-bold mb-4 border-b pb-2" style={{ borderColor: 'var(--dark-border)' }}>
              Contact Us
            </h3>
            <form>
              <input 
                type="text" 
                placeholder="Your Full Name" 
                className="w-full p-2 mb-3 focus:outline-none focus:ring-2"
                style={{ 
                  background: 'var(--dark-bg)',
                  color: 'var(--dark-text)',
                  borderColor: 'var(--dark-border)'
                }}
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-2 mb-3 focus:outline-none focus:ring-2"
                style={{ 
                  background: 'var(--dark-bg)',
                  color: 'var(--dark-text)',
                  borderColor: 'var(--dark-border)'
                }}
              />
              <textarea 
                rows="3"
                placeholder="Your Message" 
                className="w-full p-2 mb-3 focus:outline-none focus:ring-2"
                style={{ 
                  background: 'var(--dark-bg)',
                  color: 'var(--dark-text)',
                  borderColor: 'var(--dark-border)'
                }}
              ></textarea>
              <button 
                type="submit" 
                className="btn-dark w-full py-2 transition duration-200 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* 2. Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="body-dark text-xl font-bold mb-4 border-b pb-2" style={{ borderColor: 'var(--dark-border)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="body-dark transition-colors border-b-2 border-transparent hover:opacity-70 hover:border-current pb-1">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="body-dark transition-colors border-b-2 border-transparent hover:opacity-70 hover:border-current pb-1">
                  News
                </a>
              </li>
              <li>
                <a href="#" className="body-dark transition-colors border-b-2 border-transparent hover:opacity-70 hover:border-current pb-1">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* 3. Social Links */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="body-dark text-xl font-bold mb-4 border-b pb-2" style={{ borderColor: 'var(--dark-border)' }}>
              Follow Us
            </h3>
            <div className="flex space-x-4 body-dark">
              <a href="https://www.facebook.com/people/BHOS-Debate-Club/100074306918748/" aria-label="Facebook" className="text-2xl hover:scale-110 transition" data-aos="fade-up" data-aos-delay="0">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/bhos.debate.club" aria-label="Instagram" className="text-2xl hover:scale-110 transition" data-aos="fade-up" data-aos-delay="50">
                <FaInstagram />
              </a>
              <a href="mailto:contact@debate.bhos.club" aria-label="Mail" className="text-2xl hover:scale-110 transition" data-aos="fade-up" data-aos-delay="100">
                <IoMdMail />
              </a>
            </div>
          </div>

          {/* 4. Embedded Map */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="body-dark text-xl font-bold mb-4 border-b pb-2" style={{ borderColor: 'var(--dark-border)' }}>
              Our Location
            </h3>
            <div className="aspect-w-16 aspect-h-9 w-full h-40 flex items-center justify-center rounded overflow-hidden" style={{ background: 'var(--dark-bg)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.1081747647668!2d49.824485375952364!3d40.32001506152026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307f003b58ac43%3A0xbafb16ba15086cd2!2sBaku%20Higher%20Oil%20School!5e1!3m2!1sen!2saz!4v1763327612670!5m2!1sen!2saz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center body-dark opacity-70">
          <p>&copy; {new Date().getFullYear()} BHOS Debate Club. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;