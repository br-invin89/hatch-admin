import axios from 'axios'
import { API_SERVER_URL } from '../config/restapi'

export const getParents = () => {
  return axios.get(API_SERVER_URL+'parents')
  .then(res => res.data)
  .catch(err => {
    throw new Error('API error on getting parents')
  })
}

export const getParent = ({ parentId }) => {
  return axios.get(`${API_SERVER_URL}parents/${parentId}`)
  .then(res => res.data)
  .catch(err => {
    throw new Error('API error on getting parent detail')
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
  const { number, zipCode, cvc, holderName, expYear, expMonth } = userInfo.card
  formData.append('number', number)
  formData.append('zipCode', zipCode)
  formData.append('cvc', cvc)
  formData.append('holderName', holderName)
  formData.append('expYear', expYear)
  formData.append('expMonth', expMonth)

  return axios.post(`${API_SERVER_URL}createParent`, 
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
  const { number, zipCode, cvc, holderName, expYear, expMonth } = userInfo.card
  formData.append('number', number)
  formData.append('zipCode', zipCode)
  formData.append('cvc', cvc)
  formData.append('holderName', holderName)
  formData.append('expYear', expYear)
  formData.append('expMonth', expMonth)

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

export const getChild = ({ parentId, childId }) => {
  return axios.get(`${API_SERVER_URL}children/${parentId}/${childId}`)
  .then(res => res.data)
  .catch(err => {
    throw new Error('API error on getting child detail')
  })
}

export const deleteChild = ({ parentId, childId }) => {
  return axios.post(`${API_SERVER_URL}deleteChild/${parentId}/${childId}`)
  .then(res => res)
  .catch(err => {
    throw new Error('API error on deleting child')    
  })
}

export const createChild = ({ userInfo }) => {
  const { image } = userInfo
  const { name, gender, birthday, parentId } = userInfo
  var formData = new FormData()
  formData.append('image', image)
  formData.append('parentId', parentId)
  formData.append('name', name)
  formData.append('gender', gender)
  formData.append('birthday', birthday)

  return axios.post(`${API_SERVER_URL}createChild/${parentId}`, 
    formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  ).then(res => res)
  .catch(err => {
    throw new Error('API error on creating child')
  })
}

export const updateChild = ({ userInfo }) => {  
  const { parentId, childId } = userInfo
  const { image } = userInfo
  const { name, gender, birthday } = userInfo
  var formData = new FormData()
  formData.append('image', image)
  formData.append('name', name)
  formData.append('gender', gender)
  formData.append('birthday', birthday)

  return axios.post(`${API_SERVER_URL}updateChild/${parentId}/${childId}`, 
    formData, 
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
  ).then(res => res)
  .catch(err => {
    throw new Error('API error on updating child')
  })
}
