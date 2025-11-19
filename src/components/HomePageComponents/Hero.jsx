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
      <div className="relative text-center px-6 max-w-5xl">
        <h1 
          className="font-baskerville text-[4rem] md:text-[5rem] lg:text-[6rem] body-dark mb-6 leading-tight"
          data-aos="fade-down"
        >
          Join the Art of <span className="italic">Debate</span>
        </h1>
        
        <p 
          className="font-body body-dark text-base md:text-lg tracking-wider uppercase mb-6"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Explore the art of reasoning with the BHOS Debate Club.
        </p>
        
        <p 
          className="font-body body-dark text-base md:text-lg leading-relaxed italic mb-10 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Engage in thought-provoking discussions and sharpen your critical thinking skills.
        </p>

        <button
          onClick={scrollToContact}
          className="btn-dark font-body px-10 py-4 cursor-pointer transform
                     transition-all font-semibold uppercase
                     shadow-lg hover:shadow-xl"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="800"
        >
          Get Involved
        </button>
      </div>
    </div>
  )
}

export default Hero