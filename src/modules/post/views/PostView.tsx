import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "../components/Card"

import { actionsPost } from '../store'
import { RootState } from '../../../store/index';
import { NavLink } from "react-router-dom"
import Header from "../../../shared/components/Header"


const PostView = () => {

  const { posts } = useSelector( (state:RootState) => state.posts )
  const dispatch = useDispatch()
  const { actionPostLoaded, postDeleted } = bindActionCreators(actionsPost, dispatch)

  useEffect(() => {
    actionPostLoaded()
  }, [])

  const handleDelete = ( id:number ) => {
    postDeleted(id)
  }

  return (
    <>
      <Header />
      <div className="container__post">
        {
          posts.map( post =>(
            <Card
              key={post.id} 
              post={post}
              handleDelete={ handleDelete }
            />
          ))
        }
      </div>
    </>
  )
}

export default PostView