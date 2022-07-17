import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"

import { actionsPost } from '../store'


const PostView = () => {

  const dispatch = useDispatch()
  const { actionPostLoaded } = bindActionCreators(actionsPost, dispatch)

  useEffect(() => {
    actionPostLoaded()
  }, [])
  

  return (
    <div>
      Vista
    </div>
  )
}

export default PostView