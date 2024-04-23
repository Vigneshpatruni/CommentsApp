// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {comment, toggleLike, onDelete, count} = props
  const {id, name, text, isLiked} = comment
  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const deletItem = () => {
    onDelete(id)
  }

  const likeOrDislike = () => {
    toggleLike(id)
  }

  return (
    <div>
      <p>{count} Comments</p>
      <li>
        <div>
          <button type="button">{name[0]}</button>
          <p>{name}</p>
          <p>{formatDistanceToNow(new Date())}</p>
        </div>
        <p>{text}</p>
        <div>
          <button type="button" onClick={likeOrDislike}>
            <img src={likeImage} alt="likedImage" />
          </button>
          <button type="button" onClick={deletItem}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    </div>
  )
}

export default CommentItem
