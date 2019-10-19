import { combineReducers } from 'redux';
import app from './app'
import auth from './auth'
import users from './users'
import contents from './contents'

const rootReducer = combineReducers({
  app,
  auth,
  users,
  contents,
})

export default rootReducer;
