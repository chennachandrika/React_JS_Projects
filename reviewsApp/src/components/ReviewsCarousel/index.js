import {Component} from 'react'
import './index.css'

const LEFT_ARROW_IMG =
  'https://assets.ccbp.in/frontend/react-js/left-arrow-img.png'
const leftArrow = 'left-arrow'
const RIGHT_ARROW_IMG =
  'https://assets.ccbp.in/frontend/react-js/right-arrow-img.png'
const rightArrow = 'right-arrow'

class ReviewsCarousel extends Component {
  state = {reviewCount: 0}

  getPreviousReview = () => {
    const {reviewCount} = this.state
    if (reviewCount > 0) {
      this.setState(prevState => ({reviewCount: prevState.reviewCount - 1}))
    }
  }

  getNextReview = () => {
    const {reviewCount} = this.state
    const {reviewsData} = this.props
    if (reviewCount < reviewsData.length - 1) {
      this.setState(prevState => ({reviewCount: prevState.reviewCount + 1}))
    }
  }

  getArrowIcons = iconDetails => (
    <button
      id={iconDetails.id}
      testid={iconDetails.id}
      type="button"
      className="button"
      onClick={iconDetails.onClick}
    >
      <img
        className="img-icon"
        src={iconDetails.imgURL}
        alt={iconDetails.altText}
      />
    </button>
  )

  getCurrentReview = () => {
    const {reviewCount} = this.state
    const {reviewsData} = this.props
    const {imgUrl, username, companyName, description} = reviewsData[
      reviewCount
    ]
    return (
      <div className="review">
        <img src={imgUrl} alt={`${username}-avatar`} className="profile-img" />
        <p className="username">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="review-description">{description}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="review-app-container">
        <h1 className="app-heading">Reviews</h1>
        <div className="review-carousel-container">
          {this.getArrowIcons({
            id: 'leftArrow',
            imgURL: LEFT_ARROW_IMG,
            altText: leftArrow,
            onClick: this.getPreviousReview,
          })}
          {this.getCurrentReview()}
          {this.getArrowIcons({
            id: 'rightArrow',
            imgURL: RIGHT_ARROW_IMG,
            altText: rightArrow,
            onClick: this.getNextReview,
          })}
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
