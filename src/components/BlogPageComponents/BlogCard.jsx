import { useNavigate } from 'react-router'

function BlogCard({ blog, index }) {
  const navigate = useNavigate()

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <div 
      onClick={() => navigate(`/blog/${blog.id}`)}
      className="group/card header-light rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer transform hover:-translate-y-1"
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
        <h3 className="font-body text-[1.25rem] leading-snug font-semibold h2-light mb-3 group-hover/card:opacity-80 transition-colors">
          {blog.title}
        </h3>
        <p className="font-body text-[0.95rem] leading-relaxed body-light mb-4">
          {truncateText(blog.content, 120)}
        </p>
        <p className="font-body text-[0.875rem] body-light opacity-70">
          {blog.date}
        </p>
      </div>
    </div>
  )
}

export default BlogCard