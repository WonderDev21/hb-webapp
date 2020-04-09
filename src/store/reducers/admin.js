import { handleActions, createAction } from 'redux-actions'
import { REQUEST_STATUS } from '../../config/constants'
import { defineLoopActions, requestLoopHandlers } from '../../lib/state'
import { apiAction } from '../../lib/apiCall'
import { setCookie } from '../../utils/Cookies'

import { ADMINLOGIN } from '../actions/actionTypes'

const initialState = {
  token: '',
  isLoggedIn: false,
  loginState: REQUEST_STATUS.INITIAL,
  state: REQUEST_STATUS.INITIAL,
  error: {}
}

export const {
  start: adminLogin,
  success: adminLoginSuccess,
  fail: adminLoginFail
} = defineLoopActions(ADMINLOGIN)

export const fetchAdminLogin = data => {
  const apiUrl = `/token`

  return apiAction({
    url: apiUrl,
    method: 'POST',
    data: data,
    onStart: adminLogin,
    onSuccess: adminLoginSuccess,
    onFailure: adminLoginFail,
    label: ADMINLOGIN
  })
}

export const adminReducer = handleActions(
  {
    ...requestLoopHandlers({
      action: ADMINLOGIN,
      onSuccess: (state, payload) => {
        const token = payload.data.attributes.token
        setCookie('hbtoken_30', token, 30)
        return {
          ...state,
          token: token,
          isLoggedIn: true,
          loginState: REQUEST_STATUS.SUCCESS,
          ...payload
        }
      }
    })
  },
  initialState
)
