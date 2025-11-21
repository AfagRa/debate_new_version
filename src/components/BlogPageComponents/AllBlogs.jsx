import BlogCard from "./BlogCard"

function AllBlogs({ blogs }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-8">
      {blogs.map((blog, index) => (
        <BlogCard key={blog.id} blog={blog} index={index} />
      ))}
    </div>
  )
}

export default AllBlogs