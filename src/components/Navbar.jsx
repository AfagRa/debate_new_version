const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-[#07005C] text-stone-200 z-50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex gap-8 text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-amber-600 transition">Home</a>
            <a href="#" className="hover:text-amber-600 transition">About</a>
            <a href="#" className="hover:text-amber-600 transition">Portfolio</a>
          </div>
          <div className="w-12 h-12 rounded-full border-2 border-stone-400 flex items-center justify-center">
            <img className="w-10 h-10" src="/img/logo.png" alt="logo" />
          </div>
          <div className="flex gap-8 text-sm tracking-widest uppercase">
            <a href="#" className="hover:text-amber-600 transition">Services</a>
            <a href="#" className="hover:text-amber-600 transition">Shop</a>
            <a href="#" className="hover:text-amber-600 transition">Contact</a>
          </div>
        </div>
      </nav>
  )
}

export default Navbar