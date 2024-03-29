import './index.css'
import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsData} = props
  return (
    <ul className="blog-list-container">
      {blogsData.map(blog => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </ul>
  )
}

export default BlogList
