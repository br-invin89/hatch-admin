import * as types from '../actionTypes'

const initialState = {
  contents: [],
  content: null
}

function contentsReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_CONTENTS_SUCCESS:
      return {
        ...state,
        contents: action.payload.contents
      }
    case types.GET_CONTENT_SUCCESS:
      return {
        ...state,
        content: action.payload.content
      }
    default:
      return state
  }
}

export default contentsReducer
