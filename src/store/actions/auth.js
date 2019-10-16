import * as types from '../actionTypes'

export function tryLogin(email, password) {
  return {
    type: types.LOGIN_REQUEST,
    payload: { email, password }
  }
}

export function doLogout() {
  return {
    type: types.LOGOUT_DONE
  }
}
