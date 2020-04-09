import * as actions from '../actions/actionTypes'

const initialState = {
  tickets: null,
  ticketSuccessMessage: null,
  ticketErrorMessage: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_TICKETS:
      return getTickets(state, action)
    case actions.UPDATE_TICKET_SUCCESS:
      return updateTicketSuccess(state, action)
    case actions.UPDATE_TICKET_ERROR:
      return updateTicketError(state, action)
    default:
      return state
  }
}

const getTickets = (state, action) => {
  return {
    ...state,
    tickets: action.data
  }
}

const updateTicketError = (state, action) => {
  return {
    ...state,
    ticketErrorMessage: action.data,
    ticketSuccessMessage: ''
  }
}

const updateTicketSuccess = (state, action) => {
  return {
    ...state,
    ticketSuccessMessage: action.data,
    ticketErrorMessage: ''
  }
}

export default reducer
