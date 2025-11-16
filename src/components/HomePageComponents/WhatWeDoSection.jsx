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
    <div className="bg-[#b1b1b3]">
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <div className="mb-12">
              <h2 className="font-baskerville text-[3.5rem] leading-tight text-zinc-800 mb-4 italic">
                What We Do
              </h2>
              <p className="font-garamond text-[1.75rem] leading-snug text-zinc-700 mb-4">
                —building voices, shaping minds.
              </p>
              <p className="font-body text-[1.125rem] leading-relaxed text-zinc-600">
                We provide a comprehensive platform for debaters to learn, compete, and grow together through meaningful engagement and intellectual challenge.
              </p>
              {/* <p className="font-body text-[1.125rem] leading-relaxed text-zinc-600">
                The Baku Higher Oil School Debate Club is a vibrant community that nurtures intellectual curiosity, critical thinking, and persuasive communication, with a focus on public speaking and effective communication skills. Students from all disciplines are welcome to participate in dynamic, respectful discussions on a variety of topics.
              </p> */}
            </div>

            {/* Activities List */}
            <div className="space-y-6 font-body">
              {activities.map((activity) => (
                <div className="flex gap-4" key={activity.title}>
                  <div className="text-[2rem] leading-none shrink-0">
                    {activity.emoji}
                  </div>
                  <div>
                    <h3 className="text-[1.25rem] leading-snug font-semibold text-zinc-800 mb-2">
                      {activity.title}
                    </h3>
                    <p className="text-[1rem] leading-relaxed text-zinc-600">
                      {activity.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center items-center">
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