import axios from '../store/axios-instance'
import { API } from '../lib/apiCall'

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action)

  if (action.type !== API) return

  const {
    url,
    method,
    data,
    accessToken,
    onStart,
    onSuccess,
    onFailure,
    label,
    headers
  } = action.payload

  const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data'

  // axios default configs
  axios.defaults.headers.common['Content-Type'] = 'application/json'
  axios.defaults.headers.common['Authorization'] = `${accessToken}`

  if (label) {
    dispatch(onStart(label))
  }
  axios
    .request({
      url,
      method,
      headers,
      [dataOrParams]: data
    })
    .then(({ data }) => {
      dispatch(onSuccess(data))
    })
    .catch(error => {
      dispatch(onFailure(error.response.data))
    })
}

export default apiMiddleware
