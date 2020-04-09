import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import {
  Button,
  Col,
  Row,
  Modal,
  ModalFooter,
  ModalBody,
  Label
} from 'reactstrap'
import creditCardType from 'credit-card-type'
import Cards from 'react-credit-cards'
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './cardUtils'
import { Form, Field } from 'react-final-form'
import 'react-credit-cards/es/styles-compiled.css'

import './AddPaymentMethodModal.scss'

const initialValues = {
  number: '',
  expiry: '',
  cvc: '',
  name: ''
}

const AddPaymentMethodModal = ({ toggleModal, state, error, id }) => {
  const [errorMessage, setErrors] = useState('')
  const [modal, setModal] = useState(false)

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  const onSubmit = values => {
    setErrors('')

    if (values.cvc === '') {
      setErrors('CVC is required')
      return
    } else if (values.expiry === '') {
      setErrors('Expire date is required')
      return
    } else if (values.name === '') {
      setErrors('Name is required')
      return
    } else if (values.number === '') {
      setErrors('Card number is required')
      return
    } else if (!validateCardType(values.number)) {
      setErrors('Invalid Card number')
      return
    } else if (errorMessage === '') {
    }
  }

  const validateCardType = number => {
    var cardtype = creditCardType(number)
    if (cardtype.length > 0) return true
    else if (cardtype.length === 0) return false
  }

  return (
    <div className="animated fadeIn mt-3 addpaymentmodal">
      <Button
        size="sm"
        className="btn-success mr-1 mb-1 float-right"
        color="success"
        onClick={() => setModal(true)}
      >
        <i className="fa fa-plus mr-2"></i>
        <span className="font-weight-bold">
          <FormattedMessage
            id="app.teacher.editprofile.creditcard.addnewcard"
            defaultMessage="Add New Card"
          />
        </span>
      </Button>
      <Modal isOpen={modal} className="modal-primary" centered>
        <Form
          onSubmit={onSubmit}
          initialValues={initialValues}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            active
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <ModalBody className="addpaymentmodal__modal">
                  <Row>
                    <Col>
                      <Cards
                        number={values.number || ''}
                        name={values.name || ''}
                        expiry={values.expiry || ''}
                        cvc={values.cvc || ''}
                        focused={active}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-4">
                    <Col>
                      <Label>
                        <FormattedMessage
                          id="app.teacher.editprofile.creditcard.cardnumber"
                          defaultMessage="CardNumber"
                        />
                      </Label>
                      <Field
                        name="number"
                        component="input"
                        className="form-control"
                        type="text"
                        pattern="[\d| ]{16,22}"
                        format={formatCreditCardNumber}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Label>
                        <FormattedMessage
                          id="app.teacher.editprofile.creditcard.name"
                          defaultMessage="CardNumber"
                        />
                      </Label>
                      <Field
                        name="name"
                        component="input"
                        className="form-control"
                        type="text"
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <Label>
                        <FormattedMessage
                          id="app.teacher.editprofile.creditcard.expiredate"
                          defaultMessage="Expire Date"
                        />
                      </Label>
                      <Field
                        name="expiry"
                        component="input"
                        className="form-control"
                        type="text"
                        pattern="\d\d/\d\d"
                        format={formatExpirationDate}
                      />
                    </Col>
                    <Col className="pl-0">
                      <Label>
                        <FormattedMessage
                          id="app.teacher.editprofile.creditcard.cvc"
                          defaultMessage="CVC"
                        />
                      </Label>
                      <Field
                        name="cvc"
                        component="input"
                        type="text"
                        className="form-control"
                        pattern="\d{3,4}"
                        format={formatCVC}
                      />
                    </Col>
                  </Row>
                  <Row className="mt-3">
                    <Col>
                      <div className="error-message">
                        {errorMessage !== '' && errorMessage}
                      </div>
                    </Col>
                  </Row>
                </ModalBody>
                <ModalFooter className="addpaymentmodal__modalfooter">
                  <Button
                    classname="btn-danger"
                    color="danger"
                    size="sm"
                    onClick={() => setModal(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="btn-success"
                    color="success"
                    size="sm"
                    type="submit"
                    onClick={() => setModal(false)}
                  >
                    Save Changes
                  </Button>
                </ModalFooter>
              </form>
            )
          }}
        />
      </Modal>
    </div>
  )
}
// const mapStateToProps = ({ card }) => {
//   const { state, error } = card
//   return { state, error }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     saveCard: (data, id) => {
//       dispatch(saveCard(data, id))
//     },
//     endfetchCards: () => {
//       dispatch(endCards())
//     }
//   }
// }

export default withRouter(AddPaymentMethodModal)
