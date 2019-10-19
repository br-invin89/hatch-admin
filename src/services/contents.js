import axios from 'axios'
import { API_SERVER_URL } from '../config/restapi'


// import testData from './coursesData'

export const getContents = () => {
  return axios.get(API_SERVER_URL+'contents')
  .then(res => res.data)
  .catch(err => {
    throw new Error('API error on getting contents')
  })
}

export const getContent = ({ contentId }) => {
  return axios.get(`${API_SERVER_URL}contents/${contentId}`)
  .then(res => res.data)
  .catch(err => {
    throw new Error('API error on getting content detail')
  })
}

export const deleteContent = ({ contentId }) => {
  return axios.post(`${API_SERVER_URL}deleteContent/${contentId}`)
  .then(res => res)
  .catch(err => {
    throw new Error('API error on deleting content')    
  })
}

export const createContent = ({ content }) => {
  return axios.post(`${API_SERVER_URL}createParent`, content)
  .then(res => res)
  .catch(err => {
    throw new Error('API error on updating parent')
  })
}

export const updateContent = ({ contentId, content }) => {
  return axios.post(`${API_SERVER_URL}updateContent/${contentId}`, { content, title: 'Sample Course' })
  .then(res => res)
  .catch(err => {
    throw new Error('API error on updating parent')
  })
}
