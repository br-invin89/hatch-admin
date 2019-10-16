import * as types from '../actionTypes'
import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
import * as parentsService from '../../services/parents'

export default function* watcher() {
  yield takeLatest(types.GET_PARENTS_REQUEST, getParents)
}

function* getParents(action) {
  try {
    const parents = yield call(parentsService.getParents)
    yield put({ type: types.GET_PARENTS_SUCCESS, payload: { parents } })
  } catch(e) {
    yield put({ type: types.GET_PARENTS_FAILURE })
  }
}
