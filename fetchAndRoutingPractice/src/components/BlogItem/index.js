import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
  return (
    <Link to={`/blogs/${id}`}>
      <li className="blog-item-container">
        <img className="blog-topic-img" src={imageUrl} alt={title} />
        <div className="blog-item-details">
          <p>{topic}</p>
          <h1>{title}</h1>
          <div className="blog-item-author">
            <img className="author-img" src={avatarUrl} alt={author} />
            <p>{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
