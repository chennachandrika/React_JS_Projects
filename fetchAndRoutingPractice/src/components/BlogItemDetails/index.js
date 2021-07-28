import {Component} from 'react'
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

    this.setState({blogItemDetails: blogItemDetailsResponse, isLoading: false})
  }

  render() {
    const {isLoading, blogItemDetails} = this.state
    return <p>Hi</p>
  }
}

export default BlogItemDetails
