import * as types from '../actionTypes'

const initialState = {
  parents: [],
  parents2: [],
  parent: null
}

function parentsReducer(state = initialState, action) {
  switch(action.type) {
    case types.GET_PARENTS_SUCCESS:
      return {
        ...state,
        parents: action.payload.parents,
        parents2: action.payload.parents
      }
    case types.GET_PARENTS_REQUEST:
      return {
        ...state,
        parents: [],
        parents2: []
      }
    case types.GET_PARENT_REQUEST:
      return {
        ...state,
        parent: getParentDetail(action.payload.parentId, state.parents2)
      }
    case types.SEARCH_PARENTS_REQUEST:      
      return {
        ...state,
        parents: doSearch(action.payload.searchVal, state.parents2)
      }
    default:
      return state
  }
}

export default parentsReducer;

const doSearch = (searchVal, parents) => {
  const searchedParents = []

  parents.map((parent, k) => {
    let { firstName, lastName, email, phone } = parent
    if (firstName.toLowerCase().includes(searchVal.toLowerCase()) || 
      lastName.toLowerCase().includes(searchVal.toLowerCase()) || 
      email.toLowerCase().includes(searchVal.toLowerCase()) || 
      phone.toLowerCase().includes(searchVal.toLowerCase())
    ) {
      searchedParents.push(parent)
    }
  })

  return searchedParents
}

const getParentDetail = ( parentId, parents ) => {
  let parent = null
  parents.map((parent_, k) => {
    if (parentId == parent_.parentId) {
      parent = parent_
    }
  })

  return parent
}
