import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const LIKED_IMG =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
const LIKE_IMG =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

class CommentItem extends Component {
  onChangeLikeStatus = () => {
    const {commentData, onChangeLikeStatus} = this.props
    onChangeLikeStatus(commentData.id)
  }

  onDeleteCommentItem = () => {
    const {commentData, onDeleteCommentItem} = this.props
    onDeleteCommentItem(commentData.id)
  }

  render() {
    const {commentData} = this.props
    const {
      name,
      time,
      comment,
      initialBackgroundClassName,
      isLiked,
    } = commentData
    const initialBackground = `initial-profile ${initialBackgroundClassName}`
    const likeButtonClassName = `button ${isLiked && 'liked-text'}`
    return (
      <li className="comment-item">
        <div className="comment-item-header">
          <p className={initialBackground}>{name[0].toUpperCase()}</p>
          <div>
            <div className="commentator-name-container">
              <h1 className="commentator-name">{name}</h1>
              <p className="comment-posted-time">{formatDistanceToNow(time)}</p>
            </div>
            <p>{comment}</p>
          </div>
        </div>
        <div className="comment-item-footer">
          <div>
            <button
              type="button"
              onClick={this.onChangeLikeStatus}
              className={likeButtonClassName}
            >
              <img
                className="like-img"
                src={isLiked ? LIKED_IMG : LIKE_IMG}
                alt="like"
              />
              Like
            </button>
          </div>
          <button
            onClick={this.onDeleteCommentItem}
            className="button"
            type="button"
            testid="delete"
          >
            <img
              className="delete-img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
        <hr className="horizontal-line" />
      </li>
    )
  }
}

export default CommentItem
