import * as types from '../actionTypes'

export function appendMessage({ message, messageType }) {
  return {
    type: types.MESSAGE_APPEND,
    payload: { message, messageType }
  }
}

export function clearMessage() {
  return {
    type: types.MESSAGE_CLEAR
  }
}

export function showLoading() {
  return {
    type: types.SHOW_LOADING
  }
}

export function closeLoading() {
  return {
    type: types.CLOSE_LOADING
  }
}
