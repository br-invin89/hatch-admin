import * as types from '../actionTypes'
import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
import * as usersService from '../../services/users'

export default function* watcher() {
  yield takeLatest(types.GET_PARENTS_REQUEST, getParents)
  yield takeLatest(types.GET_PARENT_REQUEST, getParent)
  yield takeLatest(types.DELETE_PARENT_REQUEST, deleteParent)
  yield takeLatest(types.CREATE_PARENT_REQUEST, createParent)
  yield takeLatest(types.UPDATE_PARENT_REQUEST, updateParent)
  yield takeLatest(types.GET_CHILD_REQUEST, getChild)
  yield takeLatest(types.DELETE_CHILD_REQUEST, deleteChild)
  yield takeLatest(types.CREATE_CHILD_REQUEST, createChild)
  yield takeLatest(types.UPDATE_CHILD_REQUEST, updateChild)
}

function* getParents(action) {
  try {
    const parents = yield call(usersService.getParents)
    yield put({ type: types.GET_PARENTS_SUCCESS, payload: { parents } })
  } catch(e) {
    yield put({ type: types.GET_PARENTS_FAILURE })
  }
}

function* getParent(action) {
  const { parentId } = action.payload
  try {
    const parent = yield call(usersService.getParent, { parentId })
    yield put({ type: types.GET_PARENT_SUCCESS, payload: { parent } })
  } catch(e) {
    yield put({ type: types.GET_PARENT_FAILURE })
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

function* getChild(action) {
  const { parentId, childId } = action.payload
  try {
    const child = yield call(usersService.getChild, { parentId, childId })
    yield put({ type: types.GET_CHILD_SUCCESS, payload: { child } })
  } catch(e) {
    yield put({ type: types.GET_CHILD_FAILURE })
  }
}

function* deleteChild(action) {
  const { parentId, childId } = action.payload

  try {
    yield call(usersService.deleteChild, { parentId, childId })
    yield put({ type: types.DELETE_CHILD_SUCCESS })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: `Child [${childId}] deleted.` } })
  } catch(e) {
    yield put({ type: types.DELETE_CHILD_FAILURE })
  }
}

function* createChild(action) {
  const { userInfo } = action.payload

  try {
    yield call(usersService.createChild, { userInfo })
    yield put({ type: types.CREATE_CHILD_SUCCESS })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: 'New child created.' } })
    const { parentId } = userInfo
    yield put({ type: types.GET_PARENT_REQUEST, payload: { parentId } })
  } catch (e) {
    yield put ({ type: types.CREATE_CHILD_FAILURE })
  }
}

function* updateChild(action) {
  const { userInfo } = action.payload

  try {
    yield call(usersService.updateChild, { userInfo })
    yield put({ type: types.UPDATE_CHILD_SUCCESS })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: `Child [${userInfo.childId}] updated.` } })
  } catch (e) {
    yield put ({ type: types.UPDATE_CHILD_FAILURE })
  }
}
