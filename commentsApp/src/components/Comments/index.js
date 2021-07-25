import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], inputName: '', inputComment: ''}

  onChangeInputName = event => {
    this.setState({inputName: event.target.value})
  }

  onChangeInputComment = event => {
    this.setState({inputComment: event.target.value})
  }

  onChangeLikeStatus = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => {
        if (eachItem.id === id) {
          return {...eachItem, isLiked: !eachItem.isLiked}
        }
        return eachItem
      }),
    }))
  }

  onDeleteCommentItem = id => {
    const {commentsList} = this.state
    const findIndex = commentsList.findIndex(item => item.id === id)
    this.setState({
      commentsList: [
        ...commentsList.slice(0, findIndex),
        ...commentsList.slice(findIndex + 1),
      ],
    })
  }

  renderComments = () => {
    const {commentsList} = this.state
    return (
      <ul className="comment-items-container">
        {commentsList.map(commentData => (
          <CommentItem
            key={commentData.id}
            commentData={commentData}
            onChangeLikeStatus={this.onChangeLikeStatus}
            onDeleteCommentItem={this.onDeleteCommentItem}
          />
        ))}
      </ul>
    )
  }

  addNewCommentItemToList = () => {
    const {commentsList, inputName, inputComment} = this.state
    const newCommentItem = {
      id: uuidv4(),
      name: inputName,
      comment: inputComment,
      isLiked: false,
      time: new Date(),
      initialBackgroundClassName:
        initialContainerBackgroundClassNames[
          Math.floor(
            Math.random() * initialContainerBackgroundClassNames.length,
          )
        ],
    }
    if (inputName && inputComment) {
      this.setState({
        inputName: '',
        inputComment: '',
        commentsList: [...commentsList, newCommentItem],
      })
    }
  }

  addCommentFormSubmission = event => {
    event.preventDefault()
    this.addNewCommentItemToList()
  }

  renderCommentsForm = () => {
    const {inputName, inputComment} = this.state
    return (
      <div>
        <p>Say Something about 4.0 Technologies</p>
        <form
          className="comments-form"
          onSubmit={this.addCommentFormSubmission}
        >
          <input
            onChange={this.onChangeInputName}
            value={inputName}
            className="name-input"
            type="text"
            placeholder="Your Name"
          />
          <textarea
            className="comment-textarea"
            onChange={this.onChangeInputComment}
            value={inputComment}
            type="text"
            placeholder="Your Comment"
          />
          <button onClick={this.addCommentFormSubmission} type="button">
            Add Comment
          </button>
        </form>
      </div>
    )
  }

  render() {
    const {commentsList} = this.state
    return (
      <div className="app-container">
        <h1>Comments</h1>
        <div className="app-form-container">
          <img
            className="comments-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          {this.renderCommentsForm()}
        </div>
        <hr className="horizontal-line" />
        <div className="comments-count-container">
          <p className="comment-count" type="button">
            {commentsList.length}
          </p>
          <h1>Comments</h1>
        </div>
        {this.renderComments()}
      </div>
    )
  }
}

export default Comments
