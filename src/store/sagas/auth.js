import * as types from '../actionTypes'
import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'

export default function* watcher() {
  yield takeLatest(types.LOGIN_REQUEST, tryLogin);
}

function* tryLogin(action) {
  const { email, password } = action.payload;

  try {
    // const accountInfo = yield call(apiService.tryLogin, { email, password });
    const accountInfo = { name: 'Hua Cheng Wan', email: 'br-invin89@gmail.com' };
    yield put({ type: types.LOGIN_SUCCESS, payload: accountInfo });
  } catch(e) {
    yield put({ type: types.LOGIN_FAILURE });
  }
}
