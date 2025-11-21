import { Search } from 'lucide-react'

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="max-w-2xl mx-auto mb-12" data-aos="fade-up">
      <div className="relative">
        <input 
          type="text"
          placeholder="Search blogs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-6 py-4 pl-14 rounded-lg font-body text-[1rem] focus:outline-none focus:ring-2 header-light"
          style={{ 
            borderWidth: '2px',
            borderColor: 'var(--light-border)',
            color: 'var(--light-text)'
          }}
        />
        <Search 
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h2-light opacity-50" 
          size={24}
        />
      </div>
    </div>
  )
}

export default SearchBar