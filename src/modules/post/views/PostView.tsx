import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux"
import Card from "../components/Card"

import { actionsPost } from '../store'
import { RootState } from '../../../store/index';


const PostView = () => {

  const { posts } = useSelector( (state:RootState) => state.posts )
  const dispatch = useDispatch()
  const { actionPostLoaded } = bindActionCreators(actionsPost, dispatch)

  useEffect(() => {
    actionPostLoaded()
  }, [])

  return (
    <div className="container__post">
      {
        posts.map( post =>(
          <Card
            key={post.id} 
            post={post}
          />
        ))
      }
    </div>
  )
}

export default PostView