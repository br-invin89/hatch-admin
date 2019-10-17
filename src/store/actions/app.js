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
