import { Link, useNavigate } from 'react-router'

function NewsSection() {
  const navigate = useNavigate()

  const newsItems = [
    {
      id: 1,
      title: "National Debate Championship 2024 Winners Announced",
      content: "Our debate team has achieved remarkable success at the National Debate Championship 2024, securing first place in the parliamentary debate category. The team demonstrated exceptional argumentation skills and strategic thinking throughout the competition, competing against 50 teams from across the country.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      date: "November 12, 2024"
    },
    {
      id: 2,
      title: "New Workshop Series: Advanced Argumentation Techniques",
      content: "We are excited to announce a new series of workshops focused on advanced argumentation techniques. These sessions will cover logical fallacies, evidence evaluation, and persuasive speaking strategies. Led by experienced debaters and coaches, participants will gain practical skills to enhance their debate performance.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800",
      date: "November 8, 2024"
    },
    {
      id: 3,
      title: "International Tournament Registration Now Open",
      content: "Registration is now open for the upcoming International Debate Tournament scheduled for March 2025. This prestigious event will bring together debaters from over 30 countries to compete in various formats including British Parliamentary, World Schools, and Public Forum debates.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800",
      date: "November 5, 2024"
    }
  ]

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <div className="bg-[#182547]">
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 text-[#b1b1b3]">
            <h2 className="font-baskerville text-[3.5rem] leading-tight mb-4 italic">
              Latest News
            </h2>
            <p className="font-garamond text-[1.75rem] leading-snug mb-4">
              —stay updated with our community.
            </p>
            <p className="font-body text-[1.125rem] leading-relaxed max-w-3xl">
              Discover the latest updates, achievements, and upcoming events from our vibrant debate community.
            </p>
          </div>

          {/* News Cards */}
          <div className="space-y-6 mb-8">
            {newsItems.map((news) => (
              <div 
                key={news.id}
                onClick={() => navigate(`/news/${news.id}`)}
                className="group flex gap-6 bg-gray-50 overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer relative"
              >
                {/* Hover Background Overlay */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                
                {/* Image */}
                <div className="w-64 shrink-0 relative z-10">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between py-6 pr-6 grow relative z-10">
                  <div>
                    <h3 className="font-body text-[1.5rem] leading-snug font-semibold text-zinc-800 mb-3 group-hover:text-zinc-900 transition-colors">
                      {news.title}
                    </h3>
                    <p className="font-body text-[1rem] leading-relaxed text-zinc-600 mb-4">
                      {truncateText(news.content, 180)}
                    </p>
                  </div>
                  <p className="font-body text-[0.875rem] text-zinc-500">
                    {news.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Read More Button */}
          <div className="flex justify-end">
            <Link to="/news">
              <button className="font-body bg-[#b1b1b3] text-[#182547] px-8 py-3 tracking-wider uppercase text-sm hover:bg-white cursor-pointer transition border border-zinc-600">
                Read More...
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsSection