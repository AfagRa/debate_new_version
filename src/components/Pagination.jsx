import { ChevronLeft, ChevronRight } from 'lucide-react'

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center items-center gap-2 mt-12" data-aos="fade-up">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn-light px-4 py-2 rounded transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
      >
        <ChevronLeft size={20} />
        <span className="hidden sm:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 cursor-pointer rounded font-body transition ${
                currentPage === page
                ? 'btn-dark'
                : 'header-light body-light hover:opacity-70'
            }`}
            >
                {page}
            </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn-light px-4 py-2 rounded transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={20} />
      </button>
    </div>
  )
}

export default Pagination