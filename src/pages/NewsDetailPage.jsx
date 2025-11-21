import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

function NewsDetailPage() {
  const { id } = useParams()

  // Later you will fetch by ID from backend
  const news = {
    id: id,
    title: "Global Economic Outlook Improves for 2025",
    content: `The international economic landscape is shifting rapidly as markets stabilize...

## Growth Recovery
Experts predict a steady return to pre-crisis growth levels...

## Investment Trends
Foreign investment continues to accelerate as confidence returns...

## Policy Impacts
Global governments are deploying new regulatory strategies...`,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200",
    date: "January 14, 2025"
  }

  return (
    <div className="bg-[var(--neutral-100)] pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title */}
        <h1
          className="font-baskerville text-[3rem] md:text-[4rem] h2-light leading-tight italic mb-4"
          data-aos="fade-up"
        >
          {news.title}
        </h1>

        {/* Date */}
        <p
          className="body-light text-sm mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {news.date}
        </p>

        {/* Image */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="150">
          <img
            src={news.image}
            alt={news.title}
            className="w-full shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <article
          className="prose prose-lg max-w-none body-light"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {news.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2
                  key={index}
                  className="font-baskerville text-[2rem] h2-light mt-8 mb-4 italic"
                >
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            return (
              <p
                key={index}
                className="font-body text-[1.125rem] leading-relaxed body-light mb-6"
              >
                {paragraph}
              </p>
            )
          })}
        </article>

        {/* Bottom Button */}
        <div
          className="mt-12 pt-8 border-t"
          style={{ borderColor: 'var(--light-border)' }}
          data-aos="fade-up"
        >
          <Link
            to="/news"
            className="btn-light inline-flex items-center gap-2 px-8 py-3 rounded-lg transition"
          >
            <ArrowLeft size={20} />
            Back to All News
          </Link>
        </div>

      </div>
    </div>
  )
}

export default NewsDetailPage
