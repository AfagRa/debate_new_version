const Hero = () => {
  return (
    <>
      <div
        className="relative pt-20 min-h-screen bg-center bg-cover flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: `url(/img/bg_hero.png)` }}
      >
        <div className="absolute p-10" />
        <div className="relative text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl text-[#D2B896] mb-6 leading-tight">
            Join the Art of <span className="italic font-serif">Debate</span>
          </h1>
          {/* <h2 className="text-2xl md:text-3xl text-[#D2B896] mb-8">
            We debate to think deeper and lead stronger.
          </h2> */}
          <p className="text-[#D2B896] text-sm tracking-wider uppercase mb-8">
            Explore the art of reasoning with the BHOS Debate Club.
          </p>
          <p className="text-[#D2B896] text-sm tracking-wider uppercase mb-8">
            Engage in thought-provoking discussions and sharpen your critical thinking skills.
          </p>

          <button
            className="px-8 py-3 text-[#b1b1b3] bg-[#182547] 
                       hover:bg-[#b1b1b3] hover:text-[#182547] 
                       transition-colors duration-300 font-semibold uppercase tracking-wide"
          >
            Get Involved
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
