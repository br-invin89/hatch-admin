import * as types from '../actionTypes'

const initialState = {
  message: [],
  messageType: 'info',
  loading: false
}

function appReducer( state = initialState, action ) {
  switch(action.type ) {
    case types.MESSAGE_APPEND: 
      return {
        ...state,
        message: action.payload.message,
        messageType: action.payload.messageType
      }
    case types.MESSAGE_CLEAR:
      return {
        ...state,
        message: '',
        messageType: 'info'
      }
    case types.SHOW_LOADING:
      return {
        ...state,
        loading: true
      }
    case types.CLOSE_LOADING:
      return {
        ...state,
        loading: false
      }
    default: 
      return state
  }
}

export default appReducer
