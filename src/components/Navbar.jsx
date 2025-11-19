import { Link } from "react-router"
import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header-dark px-6 fixed w-full top-0 z-50">
      <nav className="max-w-7xl py-1 mx-auto flex justify-between items-center h-20">
        {/* Mobile: Hamburger Menu */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="body-dark transition-colors hover:opacity-70"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop: Left Navigation */}
        <div className="hidden md:flex gap-12 items-center font-body text-md tracking-widest uppercase">
          <Link
            to="/" 
            className="body-dark hover:opacity-70 transition-colors border-b-2 border-transparent hover:border-current pb-1"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="body-dark hover:opacity-70 transition-colors border-b-2 border-transparent hover:border-current pb-1"
          >
            About
          </Link>
        </div>

        {/* Center Logo */}
        <div className="shrink-0">
          <Link to="/" onClick={closeMenu}>
            <div className="w-16 h-16 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors">
              <div className="text-center">
                <img src="../../img/logo.png" alt="logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop: Right Navigation */}
        <div className="hidden md:flex gap-12 items-center font-body text-md tracking-widest uppercase">
          <Link 
            to="/blog" 
            className="body-dark hover:opacity-70 transition-colors border-b-2 border-transparent hover:border-current pb-1"
          >
            Blog
          </Link>
          <Link 
            to="/news" 
            className="body-dark hover:opacity-70 transition-colors border-b-2 border-transparent hover:border-current pb-1"
          >
            News
          </Link>
          <button 
            onClick={scrollToContact}
            className="btn-dark border-2 border-transparent cursor-pointer uppercase px-6 py-2 rounded transition-all"
          >
            Join Us
          </button>
        </div>

        {/* Mobile: Empty space for layout balance */}
        <div className="md:hidden w-7"></div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div 
        className={`md:hidden fixed top-0 left-0 h-full w-72 header-dark transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={closeMenu}
              className="body-dark transition-colors hover:opacity-70"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex flex-col gap-6 px-8 font-body">
            <Link
              to="/"
              onClick={closeMenu}
              className="body-dark text-xl uppercase tracking-wide hover:opacity-70 transition-colors pb-3 border-b border-gray-700"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={closeMenu}
              className="body-dark text-xl uppercase tracking-wide hover:opacity-70 transition-colors pb-3 border-b border-gray-700"
            >
              About
            </Link>
            <Link
              to="/blog"
              onClick={closeMenu}
              className="body-dark text-xl uppercase tracking-wide hover:opacity-70 transition-colors pb-3 border-b border-gray-700"
            >
              Blog
            </Link>
            <Link
              to="/news"
              onClick={closeMenu}
              className="body-dark text-xl uppercase tracking-wide hover:opacity-70 transition-colors pb-3 border-b border-gray-700"
            >
              News
            </Link>
            <button
              onClick={scrollToContact}
              className="body-dark text-xl uppercase tracking-wide hover:opacity-70 transition-colors pb-3 border-b border-gray-700 text-left"
            >
              Contact
            </button>
            
            {/* Join Us Button */}
            <button
              onClick={scrollToContact}
              className="btn-dark mt-4 font-semibold px-8 py-3 rounded uppercase tracking-wide transition-all"
            >
              Join Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar