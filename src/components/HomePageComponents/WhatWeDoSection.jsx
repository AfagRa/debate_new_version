import { FaComments } from "react-icons/fa"
import { FaEarthEurope, FaPeopleGroup } from "react-icons/fa6"
import { GiCompass } from "react-icons/gi"

function WhatWeDoSection() {
  const activities = [
    {
      emoji: <FaComments />,
      title: "Weekly Practice Debates",
      description: "Sharpen your skills through regular debate sessions and argument workshops designed to build confidence and critical thinking."
    },
    {
      emoji: <GiCompass />,
      title: "Public Speaking Training",
      description: "Master the art of logical reasoning and effective communication through structured training programs and mentorship."
    },
    {
      emoji: <FaEarthEurope />,
      title: "Tournament Participation",
      description: "Compete in prestigious national and international debate tournaments to test your skills against the best."
    },
    {
      emoji: <FaPeopleGroup />,
      title: "Community Events",
      description: "Build lasting connections through events that bring together debaters, mentors, and alumni from across the community."
    }
  ]

  return (
    <div className="bg-[#9F9FA1]">
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div data-aos="fade-right">
            <div className="mb-12">
              <h2 className="font-baskerville text-[3.5rem] leading-tight text-[#182547] mb-4 italic" data-aos="fade-up">
                What We Do
              </h2>
              <p className="font-garamond text-[1.75rem] leading-snug text-[#2e3649] mb-4" data-aos="fade-up" data-aos-delay="100">
                —building voices, shaping minds.
              </p>
              <p className="font-body text-[1.125rem] leading-relaxed text-[#2e3649]" data-aos="fade-up" data-aos-delay="200">
                We provide a comprehensive platform for debaters to learn, compete, and grow together through meaningful engagement and intellectual challenge.
              </p>
            </div>

            {/* Activities List */}
            <div className="space-y-6 font-body">
              {activities.map((activity, index) => (
                <div className="flex gap-4" key={activity.title} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="text-[2rem] text-[#182547] leading-none shrink-0">
                    {activity.emoji}
                  </div>
                  <div>
                    <h3 className="text-[1.25rem] leading-snug font-semibold text-[#182547] mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-[1rem] leading-relaxed text-[#2e3649]">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center items-center" data-aos="fade-left">
            <img 
              src="../../img/people_discussing.webp" 
              alt="People discussing" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDoSection
