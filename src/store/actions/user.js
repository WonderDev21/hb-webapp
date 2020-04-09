import axios from '../axios-instance'
import jwt_decode from 'jwt-decode'
import { getCookie } from '../../utils/Cookies'

import * as actions from './actionTypes'
import * as actionCreators from './index'

export const getUser = token => {
  let decoded = jwt_decode(token)
  return dispatch => {
    axios
      .get(`/users/${decoded.sub}`, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        const userData = response.data.data
        dispatch(updateUserData(userData))
      })
      .catch(error => {})
  }
}

export const getInvitedUsers = token => {
  return dispatch => {
    axios
      .get('/users/invited_users', {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      .then(response => {
        const invitedusersData = response.data.data
        dispatch(updateInvitedUserData(invitedusersData))
      })
      .catch(error => {})
  }
}

const updateUserData = userData => {
  return {
    type: actions.GET_USER_DATA,
    data: userData
  }
}

const updateInvitedUserData = invitedusersData => {
  return {
    type: actions.GET_INVITED_USERS_DATA,
    data: invitedusersData
  }
}

export const editUserProfile = userData => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  const requestData = {
    data: {
      type: 'user',
      attributes: {
        ...userData
        // 'first_name': userData.first_name,
        // 'last_name': userData.last_name,
        // 'city': userData.city,
        // 'address': userData.address
      }
    }
  }

  return dispatch => {
    axios
      .patch('/users/self', requestData, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        dispatch(editSuccess())
      })
      .catch(function(error) {})
  }
}

export const updateInvitation = (userData, id) => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  const requestData = {
    data: {
      type: 'user',
      attributes: {
        ...userData
        // 'first_name': userData.first_name,
        // 'last_name': userData.last_name,
        // 'city': userData.city,
        // 'address': userData.address
      }
    }
  }

  return dispatch => {
    axios
      .patch('/users/' + id + '/update_invitation', requestData, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        dispatch(editSuccess())
      })
      .catch(function(error) {})
  }
}

export const verifySchoolCode = (code, userId) => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  const data = { verification_code: code }

  return dispatch => {
    axios
      .post('/users/' + userId + '/verify_school_code', data, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        if (response.status === 200) {
          dispatch(codeVerifySuccess(response.data.school_code_verified))
        }
        if (response.status === 400) {
          dispatch(codeVerifyFailure(response.data.school_code_verified))
        }
      })
      .catch(function(error) {})
  }
}

export const requestCode = (email, userId) => {
  const token = 'Bearer ' + getCookie('hbtoken_30')

  return dispatch => {
    axios
      .post(
        '/users/' + userId + '/resend_school_code',
        { email: email },
        {
          headers: {
            Authorization: token
          }
        }
      )
      .then(response => {})
      .catch(function(error) {})
  }
}

const editSuccess = () => {
  return {
    type: actions.EDIT_USER_SUCCESS
  }
}

const codeVerifySuccess = response => {
  return {
    type: actions.CODE_VERIFY_SUCCESS,
    data: response
  }
}

const codeVerifyFailure = response => {
  return {
    type: actions.CODE_VERIFY_FAILURE,
    data: response
  }
}

export const handleStripeResponse = stripeResponse => {
  return dispatch => {
    if (stripeResponse.error) {
      dispatch(updatePaymentError(stripeResponse.error.message))
    } else {
      const token = getCookie('hbtoken_30')
      const stripeToken = stripeResponse.token.id
      const cardData = stripeResponse.token.card
      const data = {
        data: {
          external_payment_info: {
            stripe_token: stripeToken,
            stripe_card: cardData.id
          },
          last4: cardData.last4,
          brand: cardData.brand
        }
      }

      axios
        .put('/payment_profile', data, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          if (response.status === 201) {
            dispatch(
              updatePaymentSuccess(
                'Your card information was sucessfully received'
              )
            )
            dispatch(getUserPaymentProfile())
          } else {
            dispatch(
              updatePaymentError(
                'There was an internal error when processing your information. Please try again in a few minutes'
              )
            )
          }
        })
        .catch(error => {
          console.log(error)
          dispatch(
            updatePaymentError(
              'There was an internal error when processing your information. Please try again in a few minutes'
            )
          )
        })
    }
  }
}

const updatePaymentError = message => {
  return {
    type: actions.UPDATE_CARD_ERROR,
    data: message
  }
}

const updatePaymentSuccess = message => {
  return {
    type: actions.UPDATE_CARD_SUCCESS,
    data: message
  }
}

export const getUserPaymentProfile = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
      .get('/payment_profile', {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        const payment_profile = response.data.data.attributes
        if (payment_profile.last4 === null) {
          dispatch(invalidPaymentProfile())
        } else {
          dispatch(updatePaymentProfile(payment_profile))
        }
      })
      .catch(error => {
        console.log(error)
        dispatch(invalidPaymentProfile())
      })
  }
}

export const invalidPaymentProfile = () => {
  return {
    type: actions.INVALID_PAYMENT_PROFILE
  }
}

const updatePaymentProfile = paymentProfileData => {
  return {
    type: actions.UPDATE_PAYMENT_PROFILE,
    data: paymentProfileData
  }
}

const resetProfileMessages = () => {
  return {
    type: actions.RESET_MESSAGES
  }
}

export const resetMessages = () => {
  return dispatch => {
    dispatch(resetProfileMessages())
  }
}

export const buyKit = kitId => {
  const token = getCookie('hbtoken_30')
  const payload = {
    data: {
      type: 'user_kit',
      attributes: {
        funding_source: 'payment'
      },
      relationships: {
        kit: {
          data: {
            id: kitId,
            type: 'kit'
          }
        }
      }
    }
  }
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .post('/user_kits', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        dispatch(actionCreators.finishLoading())
        dispatch(updateSuccessPurchase())
      })
      .catch(error => {
        dispatch(actionCreators.finishLoading())
        dispatch(updateWrongPurchase())
      })
  }
}

const updateWrongPurchase = () => {
  return {
    type: actions.WRONG_PURCHASE
  }
}

const updateSuccessPurchase = () => {
  return {
    type: actions.SUCCESS_PURCHASE
  }
}

export const resetUser = () => {
  return {
    type: actions.RESET_USER
  }
}

export const buyLearningPath = LearningPathId => {
  const token = getCookie('hbtoken_30')
  const payload = {
    data: {
      type: 'user_learning_path',
      attributes: {
        funding_source: 'payment'
      },
      relationships: {
        learning_path: {
          data: {
            id: LearningPathId,
            type: 'learning_path'
          }
        }
      }
    }
  }
  return dispatch => {
    dispatch(actionCreators.beginLoading())
    axios
      .post('/user_learning_paths', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        dispatch(actionCreators.finishLoading())
        dispatch(updateSuccessPurchase())
      })
      .catch(error => {
        dispatch(actionCreators.finishLoading())
        dispatch(updateWrongPurchase())
      })
  }
}

export const setLanguage = langId => {
  const token = getCookie('hbtoken_30')
  const data = {
    data: {
      type: 'users',
      relationships: {
        language: {
          data: {
            type: 'language',
            id: langId
          }
        }
      }
    }
  }

  return dispatch => {
    axios
      .patch('/users/self', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => {
        dispatch(languageSet())
      })
      .catch(error => {})
  }
}

const languageSet = () => {
  return {
    type: actions.SET_LANGUAGE
  }
}

export const updatePassword = packagePassword => {
  const { current_password, password, password_confirmation } = packagePassword

  const token = 'Bearer ' + getCookie('hbtoken_30')
  const requestData = {
    data: {
      type: 'password',
      attributes: {
        current_password,
        password,
        password_confirmation
      }
    }
  }
  return dispatch => {
    axios
      .patch('/passwords', requestData, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        dispatch(editSuccess())
      })
      .catch(error => {
        console.log('La contraseña no pudo cambiarse')
      })
  }
}

export const cancelSubscription = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')

  return dispatch => {
    axios
      .delete('/subscriptions/1', {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        dispatch(editSuccess())
      })
      .catch(function(error) {})
  }
}
