import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Col, Form, InputGroup } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faCalendar, faLock } from '@fortawesome/free-solid-svg-icons'

import classes from './PaidForm.module.scss'

export const PaidForm = ({ handleSubmit, handleCancel }) => {
  const [formValues, setFormValues] = useState({
    creditNumber: '',
    expires: '',
    cvc: ''
  })

  const handleChange = ({ target }) => {
    const { name, value } = target

    setFormValues({ ...formValues, [name]: value })
  }

  const _handleSubmit = (event) => {
    event.preventDefault()
    handleSubmit(formValues)
  }

  return (
    <Form className={classes.form} onSubmit={_handleSubmit}>
      <Form.Row>
        <Form.Group as={Col} md="12" controlId="">
          <Form.Label>
            <FormattedMessage
              defaultMessage="Card number"
              id="app.pay_for_kit.card_number"
            >
              {
                (txt) => <span className={classes.formLabel}>{txt}</span>
              }
            </FormattedMessage>
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">
                <FontAwesomeIcon color="#230871" icon={faCreditCard} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              name="creditNumber"
              value={formValues.creditNumber}
              placeholder="1234 1234 1234 1234"
              aria-describedby="inputGroupPrepend"
              size="lg"
              required
              onChange={(e) => handleChange(e)}
              maxLength="16"
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <Form.Row className="my-3">
        <Form.Group as={Col} md="6" controlId="">
          <Form.Label>
            <FormattedMessage
              defaultMessage="Expires"
              id="app.pay_for_kit.expires"
            >
              {
                (txt) => <span className={classes.formLabel}>{txt}</span>
              }
            </FormattedMessage>
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">
                <FontAwesomeIcon color="#230871" icon={faCalendar} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="text"
              name="expires"
              placeholder="MM/YY"
              value={formValues.expires}
              aria-describedby="inputGroupPrepend"
              size="lg"
              required
              maxLength="4"
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="">
          <Form.Label>
            <FormattedMessage
              defaultMessage="Secutiry code"
              id="app.pay_for_kit.security_code"
            >
              {
                (txt) => <span className={classes.formLabel}>{txt}</span>
              }
            </FormattedMessage>
          </Form.Label>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text id="inputGroupPrepend">
                <FontAwesomeIcon color="#230871" icon={faLock} />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              type="password"
              name="cvc"
              value={formValues.cvc}
              placeholder="CVC"
              aria-describedby="inputGroupPrepend"
              size="lg"
              required
              onChange={(e) => handleChange(e)}
            />
          </InputGroup>
        </Form.Group>
      </Form.Row>

      <Form.Row className="my-3">
        <p className={classes.message}>
        Recurring billing, cancel anytime.Terms & Conditions
        </p>
      </Form.Row>

      <Form.Row className="my-3">
        <button
          type="submit"
          className={`d-block mx-auto ${classes.redButton}`}
        >
          <FormattedMessage
            id="app.plans.btn.pro.name"
            defaultMessage="Pay $9.99/MO"
          />
        </button>
      </Form.Row>

      <Form.Row className="my-3">
        <button
          type="button"
          className={`d-block mx-auto ${classes.transparntButton}`}
          onClick={() => handleCancel()}
        >
          <FormattedMessage
            id="common.cancel"
            defaultMessage="Cancel"
          />
        </button>
      </Form.Row>
    </Form>
  )
}

PaidForm.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}
