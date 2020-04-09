import * as actions from '../actions/actionTypes'
import initialState from './initialState'

const reducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case actions.RESET_ERRORS:
      return resetErrors(state, action)
    case actions.UPDATE_ERROR_MESSAGE:
      return updateErrorMessage(state, action)
    case actions.UPDATE_SUCCESS_MESSAGE:
      return updateSuccessMessage(state, action)
    case actions.UPDATE_LOGGED_STATE:
      return updateLoggedState(state, action)
    case actions.UPDATE_USER_DATA:
      return updateUserData(state, action)
    case actions.INVITATION_SUCCESS:
      return updateInvitationSuccess(state, action)
    case actions.INVITATION_FAILURE:
      return updateInvitationFailure(state, action)
    case actions.INVITATION_SEND_SUCCESS:
      return invitationSendSuccess(state, action)
    default:
      return state
  }
}

const updateErrorMessage = (state, action) => {
  return {
    ...state,
    authError: action.data
  }
}

const updateInvitationSuccess = (state, action) => {
  return {
    ...state,
    invitation_success: action.data,
    invitation_failure: false
  }
}

const invitationSendSuccess = (state, action) => {
  return {
    ...state,
    invitationsend: true
  }
}

const updateInvitationFailure = (state, action) => {
  return {
    ...state,
    invitation_failure: action.data,
    invitation_success: false
  }
}

const updateSuccessMessage = (state, action) => {
  return {
    ...state,
    authSuccess: action.data
  }
}

const resetErrors = (state, action) => {
  return {
    ...state,
    authError: '',
    authSuccess: ''
  }
}

const updateLoggedState = (state, action) => {
  return {
    ...state,
    isLogged: action.data
  }
}

const updateUserData = (state, action) => {
  const userData = action.data
  return {
    ...state,
    userId: userData.id,
    firstName: userData.attributes.first_name
  }
}

export default reducer
