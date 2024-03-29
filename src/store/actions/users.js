import * as types from '../actionTypes'

export function getParents() {
  return {
    type: types.GET_PARENTS_REQUEST
  }
}

export function getParent({ parentId }) {
  return {
    type: types.GET_PARENT_REQUEST,
    payload: { parentId }
  }
}

export function searchParents({ searchVal }) {
  return {
    type: types.SEARCH_PARENTS_REQUEST,
    payload: { searchVal }
  }
}

export function deleteParent({ parentId }) {
  return {
    type: types.DELETE_PARENT_REQUEST,
    payload: { parentId }
  }
}

export function createParent({ userInfo }) {
  return {
    type: types.CREATE_PARENT_REQUEST,
    payload: { userInfo }
  }
}

export function updateParent({ userInfo }) {
  return {
    type: types.UPDATE_PARENT_REQUEST,
    payload: { userInfo }
  }
}

export function getChild({ parentId, childId }) {
  console.log('=====asd')
  return {
    type: types.GET_CHILD_REQUEST,
    payload: { parentId, childId }
  }
}

export function deleteChild({ parentId, childId }) {
  return {
    type: types.DELETE_CHILD_REQUEST,
    payload: { parentId, childId }
  }
}

export function createChild({ userInfo }) {
  return {
    type: types.CREATE_CHILD_REQUEST,
    payload: { userInfo }
  }
}

export function updateChild({ userInfo }) {
  return {
    type: types.UPDATE_CHILD_REQUEST,
    payload: { userInfo }
  }
}
