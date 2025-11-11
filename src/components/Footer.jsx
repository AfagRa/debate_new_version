import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

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
              <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">FAQ</a></li>
            </ul>
          </div>
          
          {/* 3. Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-2xl hover:text-blue-400 transition">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Facebook" className="text-2xl hover:text-blue-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="text-2xl hover:text-blue-400 transition">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-2xl hover:text-blue-400 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* 4. Embedded Map */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-600 pb-2">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 w-full h-40 bg-gray-700 flex items-center justify-center rounded overflow-hidden">
              {/* Placeholder for an actual embedded map (e.g., Google Maps iframe) 
                
                NOTE: You would replace the content below with an iframe 
                from a map service (like Google Maps or OpenStreetMap).
              */}
              <p className="text-sm text-gray-400">
                [Map Placeholder Area]
              </p>
              {/* Example of an iframe (replace 'YOUR_EMBED_CODE' with actual code):
                <iframe 
                    src="YOUR_EMBED_CODE" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy"
                ></iframe> 
              */}
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;