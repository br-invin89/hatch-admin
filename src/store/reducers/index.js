import { combineReducers } from 'redux';
import auth from './auth'
import parents from './parents'

const rootReducer = combineReducers({
  auth,
  parents
})

export default rootReducer;
