import { Post } from "../interfaces/post.interfaces"

interface Props {
  post: Post,
  handleDelete: (id:number) => void
}


const Card = ({ post, handleDelete }:Props) => {

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
        <h3>{ userId }</h3>
        <button
        className="btn-delete"
          onClick={()=> handleDelete(id)}
        >Eliminar</button>
      </div>
    </div>
  )
}

export default Card