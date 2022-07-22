import { Auth } from "../../interfaces/auth.interface";
import { TypeAuth } from '../types/index';

export const authLogin = ( user:Auth ) => ({
  type: TypeAuth.AUTHLOGIN,
  payload: { ...user }
})