import { useParams, Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

function BlogDetailPage() {
  const { id } = useParams()

  const blog = {
    id: id,
    title: "The Art of Constructive Arguments",
    content: `In the world of debate, constructive arguments form the foundation of persuasive discourse. Whether you're competing in parliamentary debate, public forum, or any other format, your ability to construct compelling arguments will determine your success.

## Understanding the Structure

A well-constructed argument consists of three essential components: claim, warrant, and impact. The claim is your central assertion, the warrant explains why your claim is true, and the impact demonstrates why it matters. Master debaters seamlessly weave these elements together to create arguments that are both logically sound and persuasively compelling.

## Building Your Foundation

Start by clearly stating your claim. Avoid ambiguous language or hedging. Your judges and opponents need to understand exactly what position you're defending. Once your claim is established, provide robust warrants that explain the reasoning behind it.

## The Power of Evidence

Strong evidence transforms good arguments into great ones. When selecting evidence, prioritize credibility, recency, and relevance. A single piece of high-quality evidence from a respected source often carries more weight than multiple weak sources.

## Anticipating Responses

The best debaters don't just construct arguments—they anticipate counterarguments and preempt them. Consider potential objections to your position and address them proactively. This demonstrates thorough preparation and strengthens your overall case.

## Practice Makes Perfect

Like any skill, constructing arguments improves with practice. Participate in practice rounds, analyze successful debates, and seek feedback from experienced debaters and coaches. Over time, you'll develop an intuitive sense for what makes arguments compelling.

Remember, the goal isn't just to win arguments—it's to engage in meaningful discourse that advances understanding and produces better ideas.`,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    date: "November 10, 2024"
  }

  return (
    <div className="bg-(var(--neutral-100)) pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Title */}
        <h1
          className="font-baskerville text-[3rem] md:text-[4rem] h2-light leading-tight italic mb-4"
          data-aos="fade-up"
        >
          {blog.title}
        </h1>

        {/* Date */}
        <p
          className="body-light text-sm mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {blog.date}
        </p>

        {/* Image */}
        <div className="mb-10" data-aos="fade-up" data-aos-delay="150">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full shadow-lg object-cover"
          />
        </div>

        {/* Content */}
        <article
          className="prose prose-lg max-w-none body-light"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {blog.content.split('\n\n').map((paragraph, index) => {
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
            to="/blog"
            className="btn-light inline-flex items-center gap-2 px-8 py-3 rounded-lg transition"
          >
            <ArrowLeft size={20} />
            Back to All Blogs
          </Link>
        </div>

      </div>
    </div>
  )
}

export default BlogDetailPage
