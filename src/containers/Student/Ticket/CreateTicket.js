import React from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'reactstrap'
import * as actions from '../../../store/actions/index'
import StudentHeader from '../../../components/Common/Header/StudentHeader/StudentHeader'
import CreateTicketForm from './CreateTicketForm'

import './CreateTicket.scss'

const CreateTicket = () => {
  return (
    <>
      <StudentHeader active={'user'} />
      <Row noGutters className="createTicket justify-content-center pt-4 pb-5">
        <Col lg={8} md={11} className="createTicket__block p-4">
          <Row>
            <Col className="text-center">
              <h3>Send us a support ticket</h3>
            </Col>
          </Row>
          <CreateTicketForm />
        </Col>
      </Row>
    </>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    createTicket: data => dispatch(actions.createTicket(data))
  }
}

export default connect(null, mapDispatchToProps)(CreateTicket)
