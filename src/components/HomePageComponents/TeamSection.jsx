import SimpleBar from 'simplebar-react'

function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      name: "Amin Asadullayev",
      position: "President",
      image: "../../img/team/amin_asadullayev.jpg"
    },
    {
      id: 2,
      name: "Vugar Ahadli",
      position: "Vice-President",
      image: "../../img/team/vugar_ahadli.jpg"
    },
    {
      id: 3,
      name: "Aykhan Guluzada",
      position: "Graphic Designer",
      image: "../../img/team/aykhan_guluzada.jpg"
    },
    {
      id: 4,
      name: "Hasan Bay",
      position: "Content Writer",
      image: "../../img/team/hasan_bay.jpg"
    },
    {
      id: 5,
      name: "Shukufa Salimzada",
      position: "Content Writer",
      image: "../../img/team/shukufa_salimzada.jpg"
    },
    {
      id: 6,
      name: "Togrul Abdullayev",
      position: "Website Manager",
      image: "../../img/team/togrul_abdullayev.jpg"
    },
    {
      id: 7,
      name: "Tural Gulumov",
      position: "Website Manager",
      image: "../../img/team/tural_gulumov.jpg"
    },
    {
      id: 8,
      name: "Afag Ramazanli",
      position: "Website Manager",
      image: "../../img/team/afag_ramazanli.jpg"
    },
    {
      id: 9,
      name: "Hajiaga Mirzayev",
      position: "Coordinator",
      image: "../../img/team/hajiaga_mirzayev.jpg"
    },
    {
      id: 10,
      name: "Zilan Mansurova",
      position: "Coordinator",
      image: "../../img/team/zilan_mansurova.jpg"
    },
    {
      id: 11,
      name: "Dinara Rustamzada",
      position: "Coordinator",
      image: "../../img/team/dinara_rustamzada.jpg"
    },
    {
      id: 12,
      name: "Ismayil Amrahzada",
      position: "Coordinator",
      image: "../../img/team/ismayil_amrahzada.jpg"
    },
    {
      id: 13,
      name: "Leyla Niftaliyeva",
      position: "Social Media Manager",
      image: "../../img/team/leyla_niftaliyeva.jpg"
    },
    {
      id: 14,
      name: "Nazrin Khudiyeva",
      position: "Social Media Manager",
      image: "../../img/team/nazrin_khudiyeva.jpg"
    }
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="bg-[#bebeca] relative overflow-hidden">
      {/* Hover trigger wrapper */}
      <div className="group relative z-10">
        <style>
          {`
            .team-section:hover .team-bg {
              opacity: 0.4;
            }
          `}
        </style>
        
        <div className="team-section py-20 px-6">
          {/* Background responds to section hover */}
          <div 
            className="team-bg absolute inset-0 bg-cover bg-center opacity-15 transition-opacity duration-400 pointer-events-none"
            style={{ backgroundImage: "url('../../img/bhos.jpg')" }}
          />

          <div className="max-w-6xl mx-auto relative z-20">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="font-baskerville text-[3.5rem] leading-tight text-zinc-800 mb-4 italic">
                Our Team
              </h2>
              <p className="font-body text-[1.25rem] leading-relaxed text-zinc-600 max-w-3xl mx-auto">
                Meet the dedicated individuals who guide, inspire, and support our debate community.
              </p>
            </div>

            {/* Horizontal Scroll Team Members */}
            <SimpleBar autoHide={false} forceVisible="x" className="w-full pt-0 px-0 pb-[1%]">
              <div className="flex gap-8 justify-start w-max pb-10">
                {teamMembers.map((member) => (
                  <div 
                    key={member.id}
                    className="w-72 group/card cursor-pointer bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="w-full h-80 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Name and Position */}
                    <div className="p-6 text-center">
                      <h3 className="font-body text-[1.25rem] font-semibold text-zinc-800 mb-1">
                        {member.name}
                      </h3>
                      <p className="font-body text-[1rem] text-zinc-600">
                        {member.position}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </SimpleBar>

            {/* Join Us Button */}
            <div className="flex justify-center mt-12">
              <button 
                onClick={scrollToContact}
                className="font-body bg-zinc-800 text-stone-100 px-10 py-4 tracking-wider uppercase text-sm hover:bg-zinc-700 transition border border-zinc-600"
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamSection