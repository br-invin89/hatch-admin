import * as types from '../actionTypes'

const initialState = {
  isAuthenticated: false,
  accountInfo: null
};

function authReducer(state = initialState, action) {
  switch(action.type) {
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        accountInfo: action.payload.accountInfo
      };
    case types.LOGOUT_DONE:
      return {
        ...state,
        isAuthenticated: false,
        accountInfo: null
      }
    default:
      return state;
  }
}

export default authReducer;
