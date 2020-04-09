import * as actions from '../actions/actionTypes'
import initialState from './initialState'

const reducer = (state = initialState.user, action) => {
  switch (action.type) {
    case actions.GET_USER_DATA:
      return updateUserData(state, action)
    case actions.GET_INVITED_USERS_DATA:
      return updateInvitedUserData(state, action)
    case actions.EDIT_USER_SUCCESS:
      return editUserSuccess(state, action)
    case actions.UPDATE_CARD_ERROR:
      return updateCardError(state, action)
    case actions.UPDATE_CARD_SUCCESS:
      return updateCardSuccess(state, action)
    case actions.UPDATE_PAYMENT_PROFILE:
      return updatePaymentProfile(state, action)
    case actions.INVALID_PAYMENT_PROFILE:
      return updateInvalidPaymentProfileStatus(state, action)
    case actions.RESET_MESSAGES:
      return resetMessages(state, action)
    case actions.WRONG_PURCHASE:
      return updateWrongPurchase(state, action)
    case actions.SUCCESS_PURCHASE:
      return updateSuccessPurchase(state, action)
    case actions.RESET_USER:
      return resetUser(state, action)
    case actions.SET_LANGUAGE:
      return languageSet(state, action)
    case actions.CODE_VERIFY_SUCCESS:
      return codeVerifySuccess(state, action)
    case actions.CODE_VERIFY_FAILURE:
      return codeVerifySuccess(state, action)
    default:
      return state
  }
}

const updateUserData = (state, action) => {
  const userData = action.data
  return {
    ...state,
    role: userData.attributes.role,
    firstName: userData.attributes.first_name,
    lastName: userData.attributes.last_name,
    country: userData.attributes.country,
    city: userData.attributes.city,
    age: userData.attributes.age,
    email: userData.attributes.email,
    imageUrl: userData.attributes.image_url,
    userId: userData.id,
    schoolCodeVerify: userData.attributes.school_code_verified,
    institution: userData.attributes.institution,
    industry: userData.attributes.industry,
    url: userData.attributes.url
  }
}

const updateInvitedUserData = (state, action) => {
  const inviteduserData = action.data
  return {
    ...state,
    invitedUsers: inviteduserData
  }
}

const editUserSuccess = (state, action) => {
  return {
    ...state,
    editSuccess: true
  }
}

const updateCardError = (state, action) => {
  return {
    ...state,
    cardErrorMessage: action.data,
    cardSuccessMessage: ''
  }
}

const updateCardSuccess = (state, action) => {
  return {
    ...state,
    cardSuccessMessage: action.data,
    cardErrorMessage: ''
  }
}

const updatePaymentProfile = (state, action) => {
  return {
    ...state,
    paymentProfile: action.data,
    invalidPaymentProfile: false
  }
}

const updateInvalidPaymentProfileStatus = (state, action) => {
  return {
    ...state,
    invalidPaymentProfile: true
  }
}

const resetMessages = (state, action) => {
  return {
    ...state,
    cardErrorMessage: '',
    cardSuccessMessage: '',
    wrongPurchase: false,
    successPurchase: false
  }
}

const updateWrongPurchase = (state, action) => {
  return {
    ...state,
    wrongPurchase: true
  }
}

const updateSuccessPurchase = (state, action) => {
  return {
    ...state,
    successPurchase: true
  }
}

const languageSet = (state, action) => {
  return {
    ...state,
    langSet: true
  }
}

const resetUser = (state, action) => {
  return {
    ...state,
    role: '',
    firstName: '',
    lastName: '',
    country: '',
    city: '',
    age: '',
    institution: '',
    industry: '',
    url: '',
    editSuccess: false,
    invalidPaymentProfile: false,
    paymentProfile: [],
    cardErrorMessage: '',
    cardSuccessMessage: '',
    wrongPurchase: false,
    successPurchase: false,
    langSet: false,
    imageUrl: '',
    userId: ''
  }
}

const codeVerifySuccess = (state, action) => {
  return {
    ...state,
    schoolCodeVerify: action.data,
    codeVerified: true
  }
}

const codeVerifyFailure = (state, action) => {
  return {
    ...state,
    schoolCodeVerify: action.data,
    codefailed: true
  }
}
export default reducer
