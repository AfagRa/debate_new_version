import { Link } from 'react-router'
import AllBlogs from '../BlogPageComponents/AllBlogs'

function BlogSection() {
  // // Sample blog data - will come from backend later
  const blogPosts = [
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
    }
  ]

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Hover trigger wrapper */}
      <div className="group relative">
        <style>
          {`
            .blog-section:hover .blog-bg {
              opacity: 0.4;
            }
          `}
        </style>
        
        <div className="blog-section py-20 px-6">
          {/* Background responds to section hover */}
          <div 
            className="blog-bg absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-400 pointer-events-none"
            style={{ backgroundImage: "url('../../img/The_School_of_Athens.jpg')" }}
          />

          <div className="max-w-6xl mx-auto relative">
            {/* Section Header */}
            <div className="mb-12" data-aos="fade-up">
              <h2 className="font-baskerville text-[3.5rem] leading-tight h2-light mb-4 italic">
                Featured Blogs
              </h2>
              <p className="font-garamond text-[1.75rem] leading-snug body-light mb-4">
                —insights, tips, and stories.
              </p>
              <p className="font-body text-[1.125rem] leading-relaxed body-light max-w-3xl">
                Explore articles written by our community members, covering debate strategies, personal experiences, and thought-provoking discussions.
              </p>
            </div>

            <AllBlogs blogs={blogPosts} />

            {/* Read More Button */}
            <div className="flex justify-end" data-aos="fade-up" data-aos-delay={blogPosts.length * 100}>
              <Link to="/blog">
                <button className="btn-light font-body cursor-pointer px-8 py-3 tracking-wider uppercase text-sm transition border border-zinc-600">
                  Read More Blogs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogSection