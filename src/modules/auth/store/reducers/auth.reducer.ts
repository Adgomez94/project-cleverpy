
import { Auth } from "../../interfaces/auth.interface"
import { Action } from "../actions-types";
import { TypeAuth } from '../types/index';


const initialState:Auth = {
  email: '',
  isAuthenticated: false
}


const authReducer = ( state: Auth = initialState, action:Action ) => {

  const { email, isAuthenticated }  = state

  switch (action.type) {
    case TypeAuth.AUTHLOGIN:
      
      return {
        ...state,
        email: action.payload.email,
        isAuthenticated: action.payload.isAuthenticated
      }
  
    default:
      return state
  }
  
}

export default authReducer