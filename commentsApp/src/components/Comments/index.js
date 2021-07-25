import {Component} from 'react'

// const initialContainerBackgroundClassNames = [
//   'amber',
//   'blue',
//   'orange',
//   'emerald',
//   'teal',
//   'red',
//   'light-blue',
// ]

class Comments extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>Comments</h1>
        <div className="app-form-container">
          <img
            className="comments-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
          <p>hi</p>
        </div>
      </div>
    )
  }
}

export default Comments
