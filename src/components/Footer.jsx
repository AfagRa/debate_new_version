import { FaFacebookF, FaInstagram} from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
  return (
    // Outer container with requested background color
    <footer className="bg-[#182547] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grid Layout for Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">

          {/* 1. Contact Form */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Contact Us</h3>
            <form>
              <input 
                type="text" 
                placeholder="Your Full Name" 
                className="w-full p-2 mb-3 rounded bg-[#2c3d5e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-2 mb-3 rounded bg-[#2c3d5e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea 
                rows="3"
                placeholder="Your Message" 
                className="w-full p-2 mb-3 rounded bg-[#2c3d5e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button 
                type="submit" 
                className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-200 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* 2. Quick Links/Navigation (Placeholder) */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="transition-colors border-b-2 border-transparent hover:text-gray-400 hover:border-white pb-1">About</a></li>
              <li><a href="#" className="transition-colors border-b-2 border-transparent hover:text-gray-400 hover:border-white pb-1">News</a></li>
              <li><a href="#" className="transition-colors border-b-2 border-transparent hover:text-gray-400 hover:border-white pb-1">Blog</a></li>
            </ul>
          </div>
          
          {/* 3. Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/BHOS-Debate-Club/100074306918748/" aria-label="Facebook" className="text-2xl hover:scale-110 transition">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/bhos.debate.club" aria-label="Instagram" className="text-2xl hover:scale-110 transition">
                <FaInstagram />
              </a>
              <a href="mailto:contact@debate.bhos.club" aria-label="mail" className="text-2xl hover:scale-110 transition">
                <IoMdMail />
              </a>
            </div>
          </div>

          {/* 4. Embedded Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">
              Our Location
            </h3>

            <div className="aspect-w-16 aspect-h-9 w-full h-40 bg-gray-700 flex items-center justify-center rounded overflow-hidden">
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
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} BHOS Debate Club. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;