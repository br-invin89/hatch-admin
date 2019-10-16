import { fork } from 'redux-saga/effects'
import auth from './auth'
import parents from './parents'

export default function* root() {
  yield fork(auth)
  yield fork(parents)
}
