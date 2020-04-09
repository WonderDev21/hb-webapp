import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Col, Form, InputGroup } from 'react-bootstrap'
import { FormattedMessage } from 'react-intl'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  injectStripe
} from 'react-stripe-elements'

import classes from './CheckoutForm.module.scss'

const CheckoutForm = ({
  handleSubmit,
  handleCancel,
  isFetch,
  stripe
}) => {
  const [formValuesCompleted, setformValuesCompleted] = useState({
    cardNumber: false,
    cardExpiry: false,
    cardCvc: false
  })

  const [isFormIncompleted, setisFormIncompleted] = useState(true)

  useEffect(() => {
    const formValuesCompletedValues = Object.values(formValuesCompleted)
    const elementsIncompletedList = formValuesCompletedValues.filter((isElementCompleted) => isElementCompleted === false )

    if (elementsIncompletedList.length === 0) {
      setisFormIncompleted(false)
    } else {
      setisFormIncompleted(true)
    }
  }, [formValuesCompleted])

  const submit = async (ev) => {
    ev.preventDefault()
    const { token } = await stripe.createToken({ name: "Name" })
    handleSubmit(token)
  }

  const handleChange = ({ elementType, complete }) => {
    setformValuesCompleted({
      ...formValuesCompleted,
      [elementType]: complete
    })
  }

  return (
    <Form className={classes.form} onSubmit={submit}>
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
            <CardNumberElement
              className="form-control"
              onChange={handleChange}
              onReady={ (el) => el.focus() }
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
            <CardExpiryElement
              className="form-control"
              onChange={handleChange}
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
            <CardCvcElement
              className="form-control"
              onChange={handleChange}
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
          disabled={isFormIncompleted || isFetch}
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

CheckoutForm.propTypes = {
  handleCancel: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isFetch: PropTypes.bool.isRequired,
  stripe: PropTypes.shape({
    createToken: PropTypes.func.isRequired
  }).isRequired
}

const CheckoutFormWithStripe = injectStripe(CheckoutForm)

export { CheckoutFormWithStripe as CheckoutForm }
