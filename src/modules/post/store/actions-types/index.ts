import { Post } from "../../interfaces/post.interfaces";
import { TypePost } from "../types";

interface LoadPost {
  type: TypePost.POSTLOAD,
  payload: Post[]
}

interface DeletePost {
  type: TypePost.DELETEPOST,
  payload: { id: number }
}

export type Action = LoadPost | DeletePost