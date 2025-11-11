const Section2 = () => {
  return (
    // className="bg-[#182547]"
    <div  className="min-h-screen bg-center bg-cover flex items-center justify-center overflow-hidden"
    style={{ backgroundImage: `url(/img/bg_home_2.png)` }}>
      <div className="py-20 px-6 relative text-[#b1b1b3]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl mb-4 font-serif italic">
              Design that feels like home
            </h2>
            <h3 className="text-3xl mb-6">
              —crafted for your story, inspired by nature.
            </h3>
            <p className=" leading-relaxed mb-6">
              Your brand deserves more than just pretty visuals—it deserves a story that resonates. Whether you're crafting a thoughtful brand identity or commissioning a custom illustration, I help creatives like you build designs that feel authentic, adventurous, and rooted in meaning. Inspired by nature and infused with intention, each project is a reflection of your unique story, bringing your business vision to life with the spirit of the wild and the authenticity it deserves.
            </p>
            <button className="bg-amber-800 text-stone-100 px-8 py-3 tracking-widest uppercase text-sm hover:bg-amber-700 transition">
              Work With Me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2