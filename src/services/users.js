import axios from 'axios'
import { API_SERVER_URL } from '../config/restapi'

export const getParents = () => {
  return axios.get(API_SERVER_URL+'parents')
  .then(res => res.data)
  .catch(err => {
    throw new Error('API error on getting parents')
  })
}

export const deleteParent = ({ parentId }) => {
  return axios.post(`${API_SERVER_URL}deleteParent/${parentId}`)
  .then(res => res)
  .catch(err => {
    throw new Error('API error on deleting parent')    
  })
}

export const createParent = ({ userInfo }) => {
  const { parentId } = userInfo
  const { image, card } = userInfo
  const { firstName, lastName, email, phone } = userInfo
  var formData = new FormData()
  formData.append('image', image)
  formData.append('card', card)
  formData.append('firstName', firstName)
  formData.append('lastName', lastName)
  formData.append('phone', phone)
  formData.append('email', email)

  return axios.post(`${API_SERVER_URL}createParent/${parentId}`, 
    formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  ).then(res => res)
  .catch(err => {
    throw new Error('API error on updating parent')
  })
}

export const updateParent = ({ userInfo }) => {
  const { parentId } = userInfo
  const { image, card } = userInfo
  const { firstName, lastName, email, phone } = userInfo
  var formData = new FormData()
  formData.append('image', image)
  formData.append('card', card)
  formData.append('firstName', firstName)
  formData.append('lastName', lastName)
  formData.append('phone', phone)
  formData.append('email', email)

  return axios.post(`${API_SERVER_URL}updateParent/${parentId}`, 
    formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  ).then(res => res)
  .catch(err => {
    throw new Error('API error on updating parent')
  })
}
