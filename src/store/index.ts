import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerPost from '../modules/post/store/reducers/post.reducer';
import  authReducer  from '../modules/auth/store/reducers/auth.reducer';

const rootReducer = combineReducers({
  posts: reducerPost,
  auth: authReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


