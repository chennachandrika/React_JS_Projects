import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {isLoading: true, blogsList: []}

  componentDidMount = () => {
    this.fetchBlogList()
  }

  fetchBlogList = async () => {
    const promiseForBlogList = await fetch('https://apis.ccbp.in/blogs')
    const statusCode = await promiseForBlogList.statusCode
    const blogListResponse = await promiseForBlogList.json()
    const blogListResponseFormatting = blogListResponse.map(eachBlog => ({
      id: eachBlog.id,
      title: eachBlog.title,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
      author: eachBlog.author,
      topic: eachBlog.topic,
    }))

    this.setState({blogsList: blogListResponseFormatting, isLoading: false})
  }

  render() {
    const {isLoading, blogsList} = this.state
    return (
      <ul className="blog-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsList.map(blog => <BlogItem key={blog.id} blogItem={blog} />)
        )}
      </ul>
    )
  }
}

export default BlogList
