import axios from 'axios'
import { API_SERVER_URL } from '../config/restapi'

export const getParents = () => {
  console.log(API_SERVER_URL+'test')
  return axios.get(API_SERVER_URL+'test').then(res => {
    console.log('=====123')
    return res
  }).catch(err => {
    console.log('=====341')
    console.log(err)
    throw new Error('API Server Error!')    
  })
}
