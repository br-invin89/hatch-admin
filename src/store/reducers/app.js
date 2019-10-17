import * as types from '../actionTypes'

const initialState = {
  message: [],
  messageType: 'info'
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
    default: 
      return state
  }
}

export default appReducer
