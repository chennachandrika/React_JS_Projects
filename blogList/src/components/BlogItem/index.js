import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {title, description, publishedDate} = blog
  return (
    <li className="blog-item">
      <div className="blog-header">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>

      <hr className="horizontal-line" />
    </li>
  )
}

export default BlogItem
