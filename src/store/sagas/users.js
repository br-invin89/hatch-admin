import * as types from '../actionTypes'
import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
import * as usersService from '../../services/users'

export default function* watcher() {
  yield takeLatest(types.GET_PARENTS_REQUEST, getParents)
  yield takeLatest(types.DELETE_PARENT_REQUEST, deleteParent)
  yield takeLatest(types.CREATE_PARENT_REQUEST, createParent)
  yield takeLatest(types.UPDATE_PARENT_REQUEST, updateParent)
}

function* getParents(action) {
  try {
    const parents = yield call(usersService.getParents)
    yield put({ type: types.GET_PARENTS_SUCCESS, payload: { parents } })
  } catch(e) {
    yield put({ type: types.GET_PARENTS_FAILURE })
  }
}

function* deleteParent(action) {
  const { parentId } = action.payload

  try {
    const parents = yield call(usersService.deleteParent, { parentId })
    yield put({ type: types.DELETE_PARENT_SUCCESS, payload: { parents } })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: `Parent [${parentId}] deleted.` } })
    yield put({ type: types.GET_PARENTS_REQUEST })
  } catch(e) {
    yield put({ type: types.DELETE_PARENT_FAILURE })
  }
}

function* createParent(action) {
  const { userInfo } = action.payload

  try {
    yield call(usersService.createParent, { userInfo })
    yield put({ type: types.CREATE_PARENT_SUCCESS })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: 'New parent created.' } })
  } catch (e) {
    yield put ({ type: types.CREATE_PARENT_FAILURE })
  }
}

function* updateParent(action) {
  const { userInfo } = action.payload

  try {
    yield call(usersService.updateParent, { userInfo })
    yield put({ type: types.UPDATE_PARENT_SUCCESS })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: `Parent [${userInfo.parentId}] updated.` } })
  } catch (e) {
    yield put ({ type: types.UPDATE_PARENT_FAILURE })
  }
}
