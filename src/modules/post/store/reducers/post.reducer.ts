import { TypePost } from "../types";
import { Action } from '../actions-types/index';
import { Post } from "../../interfaces/post.interfaces";

interface stateReducer {
  posts: Post[]
}

const initialState:stateReducer = {
  posts: []
}

const reducerPost = (
  state: stateReducer = initialState,
  action: Action
) => {
  switch (action.type) {
    case TypePost.POSTLOAD:
      
      return {
        ...state,
        posts: [...action.payload]
      }
  
    default:
      return state
  }
}

export default reducerPost