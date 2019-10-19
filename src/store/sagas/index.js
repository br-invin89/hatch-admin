import { fork } from 'redux-saga/effects'
import app from './app'
import auth from './auth'
import users from './users'
import contents from './contents'

export default function* root() {
  yield fork(app)
  yield fork(auth)
  yield fork(users)
  yield fork(contents)
}
