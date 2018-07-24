import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

// @TODO: Import your reducers

const middleware = []

const store = createStore(
  // combineReducers(/* @TODO: Combine your reducers */),
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
