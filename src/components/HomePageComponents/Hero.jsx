const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="relative min-h-screen bg-center bg-cover flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(/img/bg_hero.png)` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-10" />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 
          className="font-baskerville text-[4rem] md:text-[5rem] lg:text-[6rem] text-[#D2B896] mb-6 leading-tight"
          data-aos="fade-down"
          // data-aos-duration="1000"
        >
          Join the Art of <span className="italic">Debate</span>
        </h1>
        
        <p 
          className="font-body text-[#D2B896] text-base md:text-lg tracking-wider uppercase mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Explore the art of reasoning with the BHOS Debate Club.
        </p>
        
        <p 
          className="font-body text-[#D2B896] text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Engage in thought-provoking discussions and sharpen your critical thinking skills.
        </p>

        <button
          onClick={scrollToContact}
          className="font-body px-10 py-4 text-[#b1b1b3] bg-[#182547] 
                     hover:bg-[#b1b1b3] hover:text-[#182547] 
                     transition-all duration-300 font-semibold uppercase tracking-wider
                     shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          Get Involved
        </button>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1000"
      >
        <div className="flex flex-col items-center">
          <span className="font-body text-[#D2B896] text-sm mb-2 tracking-wide">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-[#D2B896] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#D2B896] rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero