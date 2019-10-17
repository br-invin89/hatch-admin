import { combineReducers } from 'redux';
import app from './app'
import auth from './auth'
import users from './users'

const rootReducer = combineReducers({
  app,
  auth,
  users,
})

export default rootReducer;
