import axios from '../axios-instance'

import * as actions from './actionTypes'
import * as actionCreators from './index'
import { setCookie } from '../../utils/Cookies'
import { getCookie } from '../../utils/Cookies'
import { Redirect } from 'react-router-dom'

export const register = (data, tokenData) => {
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .post('/users', data)
      .then(response => {
        const userData = response.data.data
        dispatch(updateUserData(userData))
        axios
          .post('/token', tokenData)
          .then(response => {
            const token = response.data.data.attributes.token
            setCookie('hbtoken_30', token, 30)
            dispatch(actionCreators.finishLoading())
            dispatch(updateLoggedState(true))
          })
          .catch(function(error) {
            dispatch(registerUserError())
            dispatch(actionCreators.finishLoading())
          })
      })
      .catch(function(error) {
        dispatch(registerUserError())
        dispatch(actionCreators.finishLoading())
      })
  }
}

const resetAuthErrors = () => {
  return {
    type: actions.RESET_ERRORS
  }
}

export const resetErrors = () => {
  return dispatch => {
    dispatch(resetAuthErrors())
  }
}

const updateUserData = data => {
  return {
    type: actions.UPDATE_USER_DATA,
    data: data
  }
}

const registerUserError = () => {
  return {
    type: actions.UPDATE_ERROR_MESSAGE,
    data: 'An error ocurred during registration.'
  }
}

const loginUserError = () => {
  return {
    type: actions.UPDATE_ERROR_MESSAGE,
    data: 'Email or password are incorrect.'
  }
}

export const updateLoggedState = isLogged => {
  return {
    type: actions.UPDATE_LOGGED_STATE,
    data: isLogged
  }
}

export const login = tokenData => {
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .post('/token', tokenData)
      .then(response => {
        const token = response.data.data.attributes.token
        dispatch(actionCreators.getUser(token))
        setCookie('hbtoken_30', token, 30)
        dispatch(updateLoggedState(true))
        dispatch(actionCreators.finishLoading())
      })
      .catch(error => {
        dispatch(loginUserError())
        dispatch(updateLoggedState(false))
        dispatch(actionCreators.finishLoading())
      })
  }
}

export const recoveryEmail = userEmail => {
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .post('/passwords', {
        data: {
          type: 'password',
          attributes: {
            email: userEmail
          }
        }
      })
      .then(response => {
        dispatch(actionCreators.finishLoading())
        dispatch(recoveryPasswordSuccess())
      })
      .catch(function(error) {
        dispatch(actionCreators.finishLoading())
        dispatch(recoveryPasswordError())
      })
  }
}

export const acceptInvitation = user => {
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .put('/users/invitation', { user })
      .then(response => {
        dispatch(actionCreators.finishLoading())
        if (response.status === 201) {
          dispatch(InvitationSuccess())
        } else {
          dispatch(InvitationFailure())
        }
      })
      .catch(function(error) {
        dispatch(actionCreators.finishLoading())
        dispatch(InvitationFailure())
      })
  }
}

export const deleteInvitation = id => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .delete('/users/' + id, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        dispatch(actionCreators.finishLoading())
        if (response.status === 200) {
          dispatch(invitationSendSuccess())
        } else {
          dispatch(InvitationFailure())
        }
      })
      .catch(function(error) {
        dispatch(actionCreators.finishLoading())
        dispatch(InvitationFailure())
      })
  }
}

export const inviteTeacher = user => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .post(
        '/users/invitation',
        { user },
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(response => {
        dispatch(actionCreators.finishLoading())
        if (response.status === 200) {
          dispatch(invitationSendSuccess())
        } else {
          dispatch(InvitationFailure())
        }
      })
      .catch(function(error) {
        dispatch(actionCreators.finishLoading())
        dispatch(InvitationFailure())
      })
  }
}

const InvitationSuccess = () => {
  return {
    type: actions.INVITATION_SUCCESS,
    data: 'Account has been setup. Please'
  }
}

const invitationSendSuccess = () => {
  return {
    type: actions.INVITATION_SEND_SUCCESS
  }
}

const InvitationFailure = () => {
  return {
    type: actions.INVITATION_FAILURE,
    data: 'Invitation is expired or invalid.'
  }
}

const recoveryPasswordError = () => {
  return {
    type: actions.UPDATE_ERROR_MESSAGE,
    data: 'Something happen, please try again later.'
  }
}

export const passwordsDontMatch = () => {
  return {
    type: actions.UPDATE_ERROR_MESSAGE,
    data: "Passwords don't match."
  }
}

const recoveryPasswordSuccess = () => {
  return {
    type: actions.UPDATE_SUCCESS_MESSAGE,
    data:
      'If your email is registered we will send you a reset password message.'
  }
}

export const recoveryPassword = (token, password, confirmPassword) => {
  const data = {
    data: {
      type: 'password',
      attributes: {
        password: password,
        password_confirmation: confirmPassword,
        reset_password_token: token
      }
    }
  }
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .patch('/passwords', data)
      .then(response => {
        dispatch(actionCreators.finishLoading())
        dispatch(resetPasswordSuccess())
      })
      .catch(error => {
        dispatch(actionCreators.finishLoading())
        dispatch(resetPasswordError())
      })
  }
}

const resetPasswordError = () => {
  return {
    type: actions.UPDATE_ERROR_MESSAGE,
    data: "We're sorry. This link has expired."
  }
}

const resetPasswordSuccess = () => {
  return {
    type: actions.UPDATE_SUCCESS_MESSAGE,
    data: 'Your password has been updated correctly.'
  }
}
