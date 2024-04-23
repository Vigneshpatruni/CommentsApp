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

// Write your code here

class Comments extends Component {
  state = {name: '', text: '', commentsList: [], isLiked: false, count: 0}

  onSubmit = event => {
    event.preventDefault()

    const {name, text, isLiked} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      text,
      isLiked,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      text: '',
      count: prevState.count + 1,
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  onDelete = id => {
    const {commentsList} = this.state
    const newList = commentsList.filter(eachComment => eachComment.id !== id)
    this.setState({commentsList: newList})
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  toggleLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {name, text, commentsList, count} = this.state

    return (
      <div className="background">
        <div className="commets-card">
          <div>
            <form onSubmit={this.onSubmit}>
              <h1>Comments</h1>
              <p>Say something about 4.0 technologies</p>
              <input
                value={name}
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                value={text}
                placeholder="Your Comment"
                onChange={this.onChangeText}
              />
              <button type="submit">Add Comment</button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="image"
          />
        </div>
        <ul>
          <p>{count} Comments</p>
          {commentsList.map(eachComment => (
            <CommentItem
              colors={initialContainerBackgroundClassNames}
              key={eachComment.id}
              comment={eachComment}
              toggleLike={this.toggleLike}
              onDelete={this.onDelete}
              count={count}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
