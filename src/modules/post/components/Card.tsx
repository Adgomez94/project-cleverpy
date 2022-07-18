import { Post } from "../interfaces/post.interfaces"

interface Props {
  post: Post
}


const Card = ({ post }:Props) => {

  const { body, id, title, userId } = post

  return (
    <div className="card">
      <div className="card__header">
        <h2>{ title }</h2>
      </div>
      <div className="card__body">
        <p>{body}</p>
      </div>
      <div className="card__footer">
        <h3>{userId}</h3>
      </div>
    </div>
  )
}

export default Card