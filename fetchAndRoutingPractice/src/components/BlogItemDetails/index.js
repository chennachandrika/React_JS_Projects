import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogItemDetails: {}}

  componentDidMount = () => {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const promiseForGettingBlogItemDetails = await fetch(
      `https://apis.ccbp.in/blogs/${id}`,
    )
    const blogItemDetailsResponse = await promiseForGettingBlogItemDetails.json()
    const blogItemDetailsResponseFormatting = {
      id: blogItemDetailsResponse.id,
      title: blogItemDetailsResponse.title,
      imgUrl: blogItemDetailsResponse.image_url,
      avatarUrl: blogItemDetailsResponse.avatar_url,
      author: blogItemDetailsResponse.author,
      content: blogItemDetailsResponse.content,
      topic: blogItemDetailsResponse.topic,
    }

    this.setState({
      blogItemDetails: blogItemDetailsResponseFormatting,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, blogItemDetails} = this.state
    const {title, imgUrl, content, avatarUrl, author} = blogItemDetails
    console.log(imgUrl)
    return (
      <>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="blog-details-container">
            <h1>{title}</h1>
            <div className="blog-item-author">
              <img className="author-img" src={avatarUrl} alt={author} />
              <p>{author}</p>
            </div>
            <img className="blog-topic-img" src={imgUrl} alt={title} />
            <p>{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
