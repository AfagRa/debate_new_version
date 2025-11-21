import NewsCard from './NewsCard'

function AllNews({ news }) {
  return (
    <div className="space-y-6 mb-8">
      {news.map((newsItem, index) => (
        <NewsCard key={newsItem.id} news={newsItem} index={index} />
      ))}
    </div>
  )
}

export default AllNews