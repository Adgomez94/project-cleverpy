import { Post } from "../../interfaces/post.interfaces";
import { TypePost } from "../types";

interface LoadPost {
  type: TypePost.POSTLOAD,
  payload: Post[]
}

export type Action = LoadPost