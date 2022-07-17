import { TypePost } from "../types";
import { Action } from '../actions-types/index';
import { Post } from "../../interfaces/post.interfaces";

interface stateReducer {
  post: Post[]
}

const initialState:stateReducer = {
  post: []
}

const reducerPost = (
  state: stateReducer = initialState,
  action: Action
) => {
  switch (action.type) {
    case TypePost.POSTLOAD:
      
      return {
        ...state,
        post: [...action.payload]
      }
  
    default:
      return state
  }
}

export default reducerPost