import { useState, useMemo } from 'react'
import SearchBar from '../components/SearchBar'
import AllNews from '../components/NewsPageComponents/AllNews'
import Pagination from '../components/Pagination'

function NewsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 6

  // Sample news data - will come from backend later
  const allNewsItems = [
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
    },
    {
      id: 4,
      title: "Alumni Success Story: From Debate Club to United Nations",
      content: "Former club president Sarah Martinez shares her journey from competitive debate to becoming a UN representative. Her story highlights how debate skills translate to international diplomacy and global leadership roles.",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800",
      date: "November 1, 2024"
    },
    {
      id: 5,
      title: "Partnership Announcement with Oxford Union",
      content: "We are thrilled to announce a new partnership with the Oxford Union for exchange programs and joint tournaments. This collaboration will provide our members with unprecedented opportunities to compete internationally.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      date: "October 28, 2024"
    },
    {
      id: 6,
      title: "Debate Club Hosts Regional Training Camp",
      content: "Over 100 students from 15 schools participated in our three-day intensive training camp. The event featured workshops from national champions and hands-on practice sessions covering all major debate formats.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800",
      date: "October 24, 2024"
    },
    {
      id: 7,
      title: "New Mentorship Program Launched",
      content: "Our new mentorship initiative pairs experienced debaters with newcomers for personalized guidance. The program aims to accelerate skill development and build lasting connections within our community.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      date: "October 20, 2024"
    },
    {
      id: 8,
      title: "Debate Club Wins Best Society Award",
      content: "We are honored to receive the Best Student Society Award at the annual university awards ceremony. This recognition celebrates our commitment to excellence, community engagement, and member development.",
      image: "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=800",
      date: "October 16, 2024"
    },
    {
      id: 9,
      title: "Guest Speaker Series: World Champion Debater",
      content: "Three-time world champion debater Michael Chen will deliver a masterclass on advanced debate strategy. The session will cover preparation techniques, mental game, and competition insights from the highest level.",
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800",
      date: "October 12, 2024"
    },
    {
      id: 10,
      title: "Debate Club Celebrates 10th Anniversary",
      content: "Join us as we celebrate a decade of fostering critical thinking, public speaking excellence, and community building. The anniversary gala will feature performances, awards, and reunions with alumni from around the world.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800",
      date: "October 8, 2024"
    },
    {
      id: 11,
      title: "Summer Debate Institute Dates Announced",
      content: "Our intensive summer program returns with expanded offerings. The two-week institute will feature advanced training, mock tournaments, and networking opportunities with top debaters and coaches.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      date: "October 4, 2024"
    },
    {
      id: 12,
      title: "Community Outreach: Debate Skills for High Schools",
      content: "We're launching a free program to introduce debate fundamentals to local high school students. The initiative aims to make competitive debate more accessible and inspire the next generation of speakers.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800",
      date: "September 30, 2024"
    }
  ]

  // Filter news based on search query
  const filteredNews = useMemo(() => {
    if (!searchQuery) return allNewsItems
    
    return allNewsItems.filter(news => 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, allNewsItems])

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / newsPerPage)
  const indexOfLastNews = currentPage * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews)

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Reset to page 1 when search query changes
  useMemo(() => {
    setCurrentPage(1)
  }, [searchQuery])

  return (
    <div className="bg-white relative overflow-hidden min-h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('../../img/The_School_of_Athens.jpg')" }}
      />

      <div className="py-20 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="font-baskerville text-[4rem] md:text-[5rem] h2-light mb-4 italic">
              Latest News
            </h1>
            <p className="font-body text-[1.25rem] body-light max-w-2xl mx-auto">
              Stay updated with the latest achievements, events, and announcements from our debate community.
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Results Count */}
          <div className="mb-6 text-center" data-aos="fade-up">
            <p className="font-body body-light">
              Showing <span className="font-semibold">{currentNews.length}</span> of <span className="font-semibold">{filteredNews.length}</span> news items
            </p>
          </div>

          {/* News List */}
          {currentNews.length > 0 ? (
            <>
              <AllNews news={currentNews} />
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <div className="text-center py-20" data-aos="fade-up">
              <p className="font-body text-[1.25rem] body-light">
                No news found matching "{searchQuery}". Try a different search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsPage