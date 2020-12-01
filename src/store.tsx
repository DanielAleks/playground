import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import isCountedReducer from './reducers/isCountedReducer'
import isRedElementReducer from './reducers/isRedElementReducer'

export interface rootStoreT {
  isRedElement: boolean
  isCounted: number
}

const rootReducer = combineReducers<rootStoreT>({
  isRedElement: isRedElementReducer,
  isCounted: isCountedReducer
})

const initialState = {}

const middleware = [thunk] 

const configureStore = () => createStore(rootReducer, initialState, applyMiddleware(...middleware))

export default configureStore

