import * as types from '../actionTypes'

export function getContents() {
  return {
    type: types.GET_CONTENTS_REQUEST
  }
}

export function getContent({ contentId }) {
  return {
    type: types.GET_CONTENT_REQUEST,
    payload: { contentId }
  }
}

export function deleteContent({ contentId }) {
  return {
    type: types.DELETE_CONTENT_REQUEST,
    payload: { contentId }
  }
}

export function createContent({ content }) {
  return {
    type: types.CREATE_CONTENT_REQUEST,
    payload: { content }
  }
}

export function updateContent({ contentId, content }) {
  return {
    type: types.UPDATE_CONTENT_REQUEST,
    payload: { contentId, content }
  }
}
