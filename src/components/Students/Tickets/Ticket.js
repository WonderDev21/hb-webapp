import React from 'react'
import PropTypes from 'prop-types'
import classes from './Ticket.module.scss'

const Ticket = ({ ticketId, problem }) => {
  Ticket.propTypes = {
    ticketId: PropTypes.number.isRequired,
    problem: PropTypes.string.isRequired
  }

  return (
    <>
      <div className="col-md-10">
        <div
          className={` border border-white row ${classes.ticket_form_container}`}
        >
          <div className={`col-md-2 ${classes.ticket_form}`}>
            <p className={`${classes.text}`}># {ticketId}</p>
          </div>
          <div className={`col-md-8 ${classes.ticket_form}`}>
            <p className={`${classes.text}`}>{problem}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Ticket
