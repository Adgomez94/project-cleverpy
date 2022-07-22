import { Auth } from "../../interfaces/auth.interface";
import { TypeAuth } from "../types";

export interface AuthLogin {
  payload: Auth,
  type: TypeAuth.AUTHLOGIN
}

export interface LogoutLogin {
  type: TypeAuth.AUTHLOGOUT
}

export type Action = AuthLogin | LogoutLogin