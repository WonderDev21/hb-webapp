import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { Row, Col, Button } from 'reactstrap'

import * as actions from '../../../store/actions/index'
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader'
import FAQ from '../../../components/Students/Ticket/FAQ'
import Ticket from '../../../components/Students/Tickets/Ticket'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './StudentTickets.scss'

const ticketsData = [
  {
    number: '#15021',
    title: 'In HTML5 course some videos are wrong…'
  },
  {
    number: '# 15022',
    title: 'How I complete my challenges?'
  }
]

const StudentTickets = ({ getTickets, tickets, history }) => {
  useEffect(() => {
    getTickets()
  }, [])

  return (
    <>
      <StudentHeader active={'Tickets'} />
      <Row noGutters className="studentTickets justify-content-center pt-4">
        <Col lg={7} md={11} className="studentTickets__block p-4">
          <Row>
            <Col className="text-center">
              <h3>Send us a support ticket</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={8}>
              <Row noGutters>
                <Col>
                  <h6>Your tickets</h6>
                </Col>
              </Row>

              {ticketsData.map((item, index) => {
                return (
                  <Row noGutters key={index}>
                    <Col className="my-1">
                      <h6 className="studentTickets__ticketItem p-2">
                        <strong className="mr-4">{item.number}</strong>{' '}
                        {item.title}
                      </h6>
                    </Col>
                  </Row>
                )
              })}
            </Col>
            <Col lg={4} className="text-center">
              <div className="studentTickets__createButton p-3">
                <h6 className="text-center font-weight-bold">
                  Need help? create a ticket and we’ll help you as soon as
                  possible
                </h6>
                <Link to="/student/create-ticket">
                  <Button color="danger" size="sm" className="mt-4 px-5">
                    Get ticket
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="mt-5 text-center">
              <h3>Or see our FAQs</h3>
            </Col>
          </Row>
          <Row>
            <Col className="mt-4">
              <FAQ />
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

const mapStateToProps = state => {
  return {
    tickets: state.tickets,
    ticketErrorMessage: state.ticketErrorMessage,
    ticketSuccessMessage: state.ticketSuccessMessage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getTickets: () => dispatch(actions.getTickets())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentTickets)
