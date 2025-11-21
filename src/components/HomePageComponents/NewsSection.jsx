import { Link } from 'react-router'
import AllNews from '../NewsPageComponents/AllNews'

function NewsSection() {
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

  return (
    <div className="header-dark">
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 body-dark" data-aos="fade-up">
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
          <AllNews news={newsItems} />

          {/* Read More Button */}
          <div className="flex justify-end" data-aos="fade-up" data-aos-delay={newsItems.length * 100}>
            <Link to="/news">
              <button className="btn-dark font-body px-10 py-4 cursor-pointer transform
                     transition-all font-semibold uppercase
                     shadow-lg hover:shadow-xl">
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