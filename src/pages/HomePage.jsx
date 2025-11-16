import Footer from "../components/Footer"
import Hero from "../components/HomePageComponents/Hero"
import Navbar from "../components/Navbar"
import WhatWeDoSection from "../components/HomePageComponents/WhatWeDoSection"
import NewsSection from "../components/HomePageComponents/NewsSection"
import BlogSection from "../components/HomePageComponents/BlogSection"
import Team from "../components/HomePageComponents/TeamSection"

const HomePage = () => {
  return (
    <>
        <div className="overflow-x-hidden">
            <Navbar />
            <Hero />
            <WhatWeDoSection />
            <NewsSection />
            <BlogSection />
            <Team />
            <Footer />
        </div>
    </>
  )
}

export default HomePage