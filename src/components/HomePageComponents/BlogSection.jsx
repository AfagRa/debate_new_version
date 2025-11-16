import { Link, useNavigate } from 'react-router'

function BlogSection() {
  const navigate = useNavigate()

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

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

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
              <h2 className="font-baskerville text-[3.5rem] leading-tight text-zinc-800 mb-4 italic">
                Featured Blogs
              </h2>
              <p className="font-garamond text-[1.75rem] leading-snug text-zinc-700 mb-4">
                —insights, tips, and stories.
              </p>
              <p className="font-body text-[1.125rem] leading-relaxed text-zinc-600 max-w-3xl">
                Explore articles written by our community members, covering debate strategies, personal experiences, and thought-provoking discussions.
              </p>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {blogPosts.map((blog, index) => (
                <div 
                  key={blog.id}
                  onClick={() => navigate(`/blog/${blog.id}`)}
                  className="group/card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {/* Image */}
                  <div className="w-full h-48 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-body text-[1.25rem] leading-snug font-semibold text-zinc-800 mb-3 group-hover/card:text-zinc-900 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="font-body text-[0.95rem] leading-relaxed text-zinc-600 mb-4">
                      {truncateText(blog.content, 120)}
                    </p>
                    <p className="font-body text-[0.875rem] text-zinc-500">
                      {blog.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More Button */}
            <div className="flex justify-end" data-aos="fade-up" data-aos-delay={blogPosts.length * 100}>
              <Link to="/blog">
                <button className="font-body cursor-pointer bg-zinc-800 text-stone-100 px-8 py-3 tracking-wider uppercase text-sm hover:bg-zinc-700 transition border border-zinc-600">
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
