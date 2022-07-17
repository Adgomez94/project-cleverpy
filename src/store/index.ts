import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducerPost from '../modules/post/store/reducers/post.reducer';

const rootReducer = combineReducers({
  reducerPost
})

export type RootState = ReturnType<typeof reducerPost>

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)


