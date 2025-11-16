import { Link } from "react-router"

function Navbar() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-[#1a1f33] text-white py-3 px-6">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Left Navigation */}
        <div className="flex gap-12 items-center text-sm tracking-widest uppercase">
          <Link
            to="/" 
            className="hover:text-gray-400 transition-colors border-b-2 border-transparent hover:border-white pb-1"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="hover:text-gray-400 transition-colors border-b-2 border-transparent hover:border-white pb-1"
          >
            About
          </Link>
        </div>

        {/* Center Logo */}
        <div className="shrink-0">
          <Link to="/">
            <div className="w-20 h-20 rounded-full border-2 border-gray-400 flex items-center justify-center hover:border-white transition-colors">
              <div className="text-center">
                <img src="../../img/logo.png" alt="logo" />
              </div>
            </div>
          </Link>
        </div>

        {/* Right Navigation */}
        <div className="flex gap-12 items-center text-sm tracking-widest uppercase">
          <Link 
            to="/blog" 
            className="hover:text-gray-400 transition-colors border-b-2 border-transparent hover:border-white pb-1"
          >
            Blog
          </Link>
          <Link 
            to="/news" 
            className="hover:text-gray-400 transition-colors border-b-2 border-transparent hover:border-white pb-1"
          >
            News
          </Link>
          <button 
            onClick={scrollToContact}
            className="bg-transparent border-1 cursor-pointer uppercase border-white px-6 py-2 rounded hover:bg-white hover:text-zinc-900 transition-all"
          >
            Join Us
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar