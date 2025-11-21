import { useState, useMemo } from 'react'
import AllBlogs from '../components/BlogPageComponents/AllBlogs'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'

function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const blogsPerPage = 9

  // Sample blog data 
  const allBlogPosts = [
    {
      id: 1,
      title: "The Art of Constructive Arguments",
      content: "In the world of debate, constructive arguments form the foundation of persuasive discourse. Learn how to build compelling cases that stand up to scrutiny and effectively communicate your position to judges and audiences alike.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
      date: "November 10, 2024"
    },
    {
      id: 2,
      title: "Overcoming Stage Fright in Public Speaking",
      content: "Stage fright affects even experienced speakers. Discover proven techniques to manage anxiety, build confidence, and deliver powerful speeches that captivate your audience from the first word to the last.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800",
      date: "November 6, 2024"
    },
    {
      id: 3,
      title: "Research Methods for Competitive Debate",
      content: "Effective research is the backbone of successful debate preparation. Explore strategies for gathering credible evidence, organizing information efficiently, and leveraging sources to strengthen your arguments.",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800",
      date: "November 2, 2024"
    },
    {
      id: 4,
      title: "Understanding Logical Fallacies",
      content: "Recognizing and avoiding logical fallacies is crucial for constructing sound arguments. Learn to identify common fallacies in your opponents' arguments and ensure your own reasoning remains bulletproof.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800",
      date: "October 28, 2024"
    },
    {
      id: 5,
      title: "Cross-Examination Techniques That Win Debates",
      content: "Cross-examination can make or break your debate performance. Master the art of asking strategic questions, controlling the flow of information, and exposing weaknesses in arguments with precision.",
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800",
      date: "October 24, 2024"
    },
    {
      id: 6,
      title: "Building Team Chemistry in Parliamentary Debate",
      content: "Success in team debates requires more than individual skill. Discover how to build trust, develop seamless communication, and create partnerships that elevate performance.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
      date: "October 20, 2024"
    },
    {
      id: 7,
      title: "The Psychology of Persuasion in Debate",
      content: "Understanding human psychology gives debaters a powerful advantage. Learn how to frame arguments that resonate emotionally while maintaining logical rigor.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
      date: "October 16, 2024"
    },
    {
      id: 8,
      title: "Preparing for International Tournaments",
      content: "International tournaments present unique challenges and opportunities. Get insider tips on adapting to different judging styles and representing your institution globally.",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      date: "October 12, 2024"
    },
    {
      id: 9,
      title: "Time Management in Debate Preparation",
      content: "Balancing academics, debate practice, and personal life requires strategic time management. Learn how top debaters organize their schedules and maintain peak performance.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
      date: "October 8, 2024"
    },
    {
      id: 10,
      title: "Developing a Unique Debate Style",
      content: "Every great debater has a signature style. Discover how to identify your strengths, develop your voice, and create a debate persona that stands out in competitions.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800",
      date: "October 4, 2024"
    },
    {
      id: 11,
      title: "Effective Rebuttal Strategies",
      content: "Rebuttals are where debates are won or lost. Learn advanced techniques for dismantling opposing arguments while strengthening your own position under pressure.",
      image: "https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800",
      date: "September 30, 2024"
    },
    {
      id: 12,
      title: "The Role of Body Language in Debate",
      content: "Non-verbal communication can be as powerful as words. Master the art of using body language to enhance your credibility and connect with judges and audiences.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800",
      date: "September 26, 2024"
    }
  ]

  // Filter blogs based on search query
  const filteredBlogs = useMemo(() => {
    if (!searchQuery) return allBlogPosts
    
    return allBlogPosts.filter(blog => 
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [searchQuery, allBlogPosts])

  // Calculate pagination
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage)
  const indexOfLastBlog = currentPage * blogsPerPage
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog)

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
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <h1 className="font-baskerville max-md:mt-4 text-[3rem] md:text-[5rem] h2-light mb-4 italic">
              All Blogs
            </h1>
            <p className="font-body text-[1.25rem] body-light max-w-2xl mx-auto">
              Explore our complete collection of articles, tips, and insights from the debate community.
            </p>
          </div>

          {/* Search Bar */}
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

          {/* Results Count */}
          <div className="mb-6 text-center" data-aos="fade-up">
            <p className="font-body body-light">
              Showing <span className="font-semibold">{currentBlogs.length}</span> of <span className="font-semibold">{filteredBlogs.length}</span> blogs
            </p>
          </div>

          {/* Blog Grid */}
          {currentBlogs.length > 0 ? (
            <>
              <AllBlogs blogs={currentBlogs} />
              
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
                No blogs found matching "{searchQuery}". Try a different search term.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BlogPage