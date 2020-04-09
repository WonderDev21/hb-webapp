import axios from 'axios'
import { getCookie } from '../utils/Cookies'

export const getInstance = (headers = {}) => {
  const token = 'Bearer ' + getCookie('hbtoken_30')

  const params = {
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Authorization': token,
      ...headers
    }
  }

  const instance = axios.create(params)

  return instance
}
