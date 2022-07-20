import { TypePost } from "../types";
import { Action } from '../actions-types/index';
import { Post } from "../../interfaces/post.interfaces";

interface stateReducer {
  posts: Post[]
}

const initialState:stateReducer = {
  posts: []
}

const reducerPost = ( state: stateReducer = initialState, action: Action ) => {

  const { posts } = state

  switch (action.type) {
    case TypePost.POSTLOAD:
      
      return {
        ...state,
        posts: [...action.payload]
      }
    
    case TypePost.DELETEPOST:
      return {
        ...state,
        posts: posts.filter(post => post.id !== action.payload.id)
      }  
  
    default:
      return state
  }
}

export default reducerPost