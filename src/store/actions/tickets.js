import axios from '../axios-instance'
import { getCookie } from '../../utils/Cookies'
import * as actions from './actionTypes'

export const getTickets = () => {
  const token = 'Bearer ' + getCookie('hbtoken_30')
  return dispatch => {
    axios
      .get('tickets', {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        const tickets = response.data.data
        dispatch(updatetickets(tickets))
      })
      .catch(function(error) {
        alert(error)
      })
  }
}

export const createTicket = (ticketData, userId) => {
  const token = 'Bearer ' + getCookie('hbtoken_30')

  return dispatch => {
    axios
      .post('tickets', ticketData, {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        if (response.status === 201) {
          dispatch(updateTicketSuccess('Ticket sent. Check your email.'))
        } else {
          dispatch(
            updateTicketError(
              'There was an internal error when processing your information. Please try again in a few minutes'
            )
          )
        }
      })
      .catch(function(error) {})
  }
}

const updatetickets = tickets => {
  return {
    type: actions.GET_TICKETS,
    data: tickets
  }
}

const updateTicketSuccess = message => {
  return {
    type: actions.UPDATE_TICKET_SUCCESS,
    data: message
  }
}

const updateTicketError = message => {
  return {
    type: actions.UPDATE_TICKET_ERROR,
    data: message
  }
}
