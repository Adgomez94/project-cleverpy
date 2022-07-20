import { Dispatch } from "redux"
import api from "../../../../api"
import { Post } from "../../interfaces/post.interfaces"
import { Action } from "../actions-types"
import { TypePost } from '../types/index';

export const actionPostLoaded = () => {
  return async ( dispatch:Dispatch<Action>) => {
    const posts = await (await api.get<Post[]>('/posts')).data
    dispatch(postLoaded(posts))
  }
}


export const postLoaded = ( posts:Post[] ):Action => ({
  type: TypePost.POSTLOAD,
  payload: posts
  
})

export const postDeleted = ( id:number ):Action => ({
  type: TypePost.DELETEPOST,
  payload: { id }
  
})

