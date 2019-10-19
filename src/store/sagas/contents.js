import * as types from '../actionTypes'
import { call, takeEvery, takeLatest, put } from 'redux-saga/effects'
import * as contentsService from '../../services/contents'

export default function* watcher() {  
  yield takeLatest(types.GET_CONTENTS_REQUEST, getContents)
  yield takeLatest(types.GET_CONTENT_REQUEST, getContent)
  yield takeLatest(types.DELETE_CONTENT_REQUEST, deleteContent)
  yield takeLatest(types.CREATE_CONTENT_REQUEST, createContent)
  yield takeLatest(types.UPDATE_CONTENT_REQUEST, updateContent)
}

function* getContents(action) {
  yield put({ type: types.SHOW_LOADING })
  try {
    const contents = yield call(contentsService.getContents)
    yield put({ type: types.GET_CONTENTS_SUCCESS, payload: { contents } })
  } catch(e) {
    yield put({ type: types.GET_CONTENTS_FAILURE })
  }
  yield put({ type: types.CLOSE_LOADING })
}

function* getContent(action) {
  const { contentId } = action.payload

  yield put({ type: types.SHOW_LOADING })
  try {
    const content = yield call(contentsService.getContent, { contentId })
    yield put({ type: types.GET_CONTENT_SUCCESS, payload: { content } })
  } catch(e) {
    yield put({ type: types.GET_CONTENT_FAILURE })
  }
  yield put({ type: types.CLOSE_LOADING })
}

function* deleteContent(action) {
  const { contentId } = action.payload

  yield put({ type: types.SHOW_LOADING })
  try {
    const contents = yield call(contentsService.deleteContent, { contentId })
    yield put({ type: types.DELETE_CONTENT_SUCCESS, payload: { contents } })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: `Content [${contentId}] deleted.` } })
    yield put({ type: types.GET_CONTENTS_REQUEST })
  } catch(e) {
    yield put({ type: types.DELETE_CONTENT_FAILURE })
  }
  yield put({ type: types.CLOSE_LOADING })
}

function* createContent(action) {
  const { content } = action.payload

  yield put({ type: types.SHOW_LOADING })
  try {
    yield call(contentsService.createContent, { content })
    yield put({ type: types.CREATE_CONTENT_SUCCESS })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: 'New content created.' } })
  } catch (e) {
    yield put ({ type: types.CREATE_CONTENT_FAILURE })
  }
  yield put({ type: types.CLOSE_LOADING })
}

function* updateContent(action) {
  const { contentId, content } = action.payload

  yield put({ type: types.SHOW_LOADING })
  try {
    yield call(contentsService.updateContent, { contentId, content })
    yield put({ type: types.UPDATE_CONTENT_SUCCESS })
    yield put({ type: types.MESSAGE_APPEND, payload: { messageType: 'success', message: `Content [${contentId}] updated.` } })
  } catch (e) {
    yield put ({ type: types.UPDATE_CONTENT_FAILURE })
  }
  yield put({ type: types.CLOSE_LOADING })
}
