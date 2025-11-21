import { useNavigate } from 'react-router'

function NewsCard({ news, index }) {
  const navigate = useNavigate()

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + '...'
  }

  return (
    <div 
      onClick={() => navigate(`/news/${news.id}`)}
      className="group flex flex-col md:flex-row gap-6 header-light overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer relative"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Hover Background Overlay */}
      <div 
        style={{background: "var(--neutral-100)"}} 
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" 
      />

      {/* Image */}
      <div className="w-full md:w-64 h-48 md:h-auto shrink-0 relative">
        <img 
          src={news.image} 
          alt={news.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between py-6 px-6 grow relative">
        <div>
          <h3 className="font-body text-[1.5rem] leading-snug font-semibold h2-light mb-3 group-hover:opacity-80 transition-colors">
            {news.title}
          </h3>
          <p className="font-body text-[1rem] leading-relaxed body-light mb-4">
            {truncateText(news.content, 180)}
          </p>
        </div>
        <p className="font-body text-[0.875rem] opacity-70" style={{color: "var(--light-subtext)"}}>
          {news.date}
        </p>
      </div>
    </div>
  )
}

export default NewsCard