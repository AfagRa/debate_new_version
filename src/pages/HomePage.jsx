import Hero from "../components/HomePageComponents/Hero"
import WhatWeDoSection from "../components/HomePageComponents/WhatWeDoSection"
import NewsSection from "../components/HomePageComponents/NewsSection"
import BlogSection from "../components/HomePageComponents/BlogSection"
import Team from "../components/HomePageComponents/TeamSection"

const HomePage = () => {
  return (
    <>
        <div className="overflow-x-hidden">
            <Hero />
            <WhatWeDoSection />
            <NewsSection />
            <BlogSection />
            <Team />
        </div>
    </>
  )
}

export default HomePage