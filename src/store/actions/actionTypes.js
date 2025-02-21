// auth.js actions
export const UPDATE_ERROR_MESSAGE = 'UPDATE_ERROR_MESSAGE'
export const UPDATE_SUCCESS_MESSAGE = 'UPDATE_SUCCESS_MESSAGE'
export const RESET_ERRORS = 'RESET_ERRORS'
export const UPDATE_LOGGED_STATE = 'UPDATE_LOGGED_STATE'
export const UPDATE_USER_DATA = 'UPDATE_USER_DATA'
export const INVITATION_SUCCESS = 'INVITATION_SUCCESS'
export const INVITATION_FAILURE = 'INVITATION_FAILURE'

// common.js actions
export const BEGIN_LOADING = 'BEGIN_LOADING'
export const FINISH_LOADING = 'FINISH_LOADING'
export const UPDATE_LOCALE_LANGUAGE = 'UPDATE_LOCALE_LANGUAGE'
export const GET_LANGUAGES = 'GET_LANGUAGES'

// user.js actions
export const GET_USER_DATA = 'GET_USER_DATA'
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const UPDATE_CARD_ERROR = 'UPDATE_CARD_ERROR'
export const UPDATE_CARD_SUCCESS = 'UPDATE_CARD_SUCCESS'
export const INVALID_PAYMENT_PROFILE = 'INVALID_PAYMENT_PROFILE'
export const UPDATE_PAYMENT_PROFILE = 'UPDATE_PAYMENT_PROFILE'
export const RESET_MESSAGES = 'RESET_MESSAGES'
export const WRONG_PURCHASE = 'WRONG_PURCHASE'
export const SUCCESS_PURCHASE = 'SUCCESS_PURCHASE'
export const RESET_USER = 'RESET_USER'
export const SET_LANGUAGE = 'SET_LANGUAGE'
export const CODE_VERIFY_SUCCESS = 'CODE_VERIFY_SUCCESS'
export const CODE_VERIFY_FAILURE = 'CODE_VERIFY_FAILURE'
export const GET_INVITED_USERS_DATA = 'GET_INVITED_USERS_DATA'
export const INVITATION_SEND_SUCCESS = 'INVITATION_SEND_SUCCESS'

// kits.js actions
export const UPDATE_KIT_AGES_DATA = 'UPDATE_KIT_AGES_DATA'
export const UPDATE_KIT_INDUSTRIES_DATA = 'UPDATE_KIT_INDUSTRIES_DATA'
export const UPDATE_KITS_DATA = 'UPDATE_KITS_DATA'
export const UPDATE_SORTED_KITS_DATA = 'UPDATE_SORTED_KITS_DATA'
export const UPDATE_KIT_INFORMATION = 'UPDATE_KIT_INFORMATION'
export const UPDATE_ACTIVE_FILTER = 'UPDATE_ACTIVE_FILTER'
export const RESET_FILTERS = 'RESET_FILTERS'

// learning_paths.js actions
export const GET_USER_LEARNING_PATHS = 'GET_USER_LEARNING_PATHS'
export const GET_LEARNING_PATHS = 'GET_LEARNING_PATHS'
export const EMPTY_USER_LEARNING_PATHS = 'EMPTY_USER_LEARNING_PATHS'
export const RESET_LEARNING_PATHS = 'RESET_LEARNING_PATHS'

// training.js actions
export const GET_TEACHER_PROGRAMS = 'GET_TEACHER_PROGRAMS'
export const GET_TEACHER_AUDIOS = 'GET_TEACHER_AUDIOS'
export const GET_TEACHER_VIDEOS = 'GET_TEACHER_VIDEOS'

// tickets.js actions
export const GET_TICKETS = 'GET_TICKETS'
export const UPDATE_TICKET_SUCCESS = 'UPDATE_TICKET_SUCCESS'
export const UPDATE_TICKET_ERROR = 'UPDATE_TICKET_ERROR'

//admin actions
const admin_namespace = 'hb-webapp/admin'
export const ADMINLOGIN = `${admin_namespace}/adminlogin`
