import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Section1 from "../components/Section1"
import Section2 from "../components/Section2"

const HomePage = () => {
  return (
    <>
        <div>
            <Navbar />
            <Hero />
            <Section1 />
            <Section2 />
        </div>
    </>
  )
}

export default HomePage