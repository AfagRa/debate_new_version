const Hero = () => {
  return (
    <>
      <div className="relative pt-20 min-h-screen bg-center bg-cover flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(/img/tornpaper.png)` }}>
        <div className="absolute p-10"/>
        <div className="relative text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl text-[#D2B896] mb-6 leading-tight">
            Handcrafted <span className="italic font-serif">storytelling branding</span>
          </h1>
          <h2 className="text-4xl md:text-5xl text-[#D2B896] mb-4">
            and <span className="italic font-serif">illustrations</span> - for photographers, creatives,
          </h2>
          <h2 className="text-4xl md:text-5xl text-[#D2B896] mb-8">
            and brands with an <span className="italic font-serif">earthy soul</span>.
          </h2>
          <p className="text-[#D2B896] text-sm tracking-wider uppercase mb-8">
            Tell me your brand's story through thoughtful illustrative designs made with intention
          </p>
        </div>
      </div>
    </>
  )
}

export default Hero