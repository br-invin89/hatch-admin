import * as types from '../actionTypes'

const initialState = {
  parents: []
}

function parentsReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_PARENTS_SUCCESS:
      return {
        ...state,
        parents: action.payload.parents
      }
    case types.GET_PARENTS_FAILURE:
      return {
        ...state,
        parents: []
      }
    default:
      return state
  }
}

export default parentsReducer;
