import axios from 'axios'
import { API_SERVER_URL } from '../config/restapi'


import testData from './coursesData'

export const getCourses = () => {
  const { courses } = testData
  return courses
  /*
  return axios.get(API_SERVER_URL+'courses')
  .then(res => res.data)
  .catch(err => {
    throw new Error('API error on getting courses')
  })
  */
}

export const getCourse = ({ courseId }) => {
  const { courses } = testData
  courses.map((course, k) => {
    if (course.courseId==courseId)
      return course
  })
  
  /*
  return axios.get(`${API_SERVER_URL}courses/${courseId}`)
  .then(res => res.data)
  .catch(err => {
    throw new Error('API error on getting course detail')
  })
  */
}


